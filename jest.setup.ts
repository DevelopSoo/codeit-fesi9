// DOM 요소를 테스트할 때 매우 유용한 커스텀 매처(matcher)들을 제공
// toBeInTheDocument(), toHaveTextContent(), toBeVisible() 등
// 1. 전역 설정: 모든 테스트 파일에서 이 매처들을 별도로 import 하지 않고도 사용할 수 있습니다.
// 2. 코드 중복 방지: 각 테스트 파일마다 동일한 import문을 반복하지 않아도 됩니다.
// 3. 일관성 유지: 모든 테스트에 동일한 확장 기능이 적용되므로 테스트 코드가 일관성을 유지합니다.
// 4. 설정 집중화: 테스트 환경 설정을 한 곳에서 관리할 수 있어 나중에 변경이 필요할 때 편리합니다.
import { server } from "@/mocks/server";
import "@testing-library/jest-dom";
import * as matchers from "jest-extended";

// 모든 테스트가 시작하기 전 MSW 서버를 시작합니다.
beforeAll(() => server.listen());
// 이전 테스트의 모의 응답이 다음 테스트에 영향을 주지 않도록 이전 테스트에서 설정된 핸들러를 초기화합니다.
afterEach(() => server.resetHandlers());
// 모든 테스트가 완료된 후에 MSW 서버를 종료합니다.
afterAll(() => server.close());

const customMatchers = {
  toBeValidUser: (received: {
    name: string;
    password: string;
    email: string;
  }) => {
    if (!received || typeof received !== "object") {
      return {
        pass: false,
        message: () => "올바른 유저 객체를 전달해주세요.",
      };
    }

    if (!received.name || !received.password || !received.email) {
      return {
        pass: false,
        message: () => "name, password, email은 필수입니다.",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(received.email)) {
      return {
        pass: false,
        message: () => "이메일 형식이 올바르지 않습니다",
      };
    }

    if (received.password.length < 8) {
      return {
        pass: false,
        message: () => "비밀번호는 8자 이상이어야 합니다.",
      };
    }

    if (received.name.length < 2) {
      return {
        pass: false,
        message: () => "이름은 2자 이상이어야 합니다.",
      };
    }

    return {
      pass: true,
      message: () => "유효한 유저 객체입니다",
    };
  },
};

expect.extend({ ...matchers, ...customMatchers });
