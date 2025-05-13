import { render, screen } from '@testing-library/react';
import Home from './page';

test('홈페이지 접속 시 상품 목록 페이지로 이동한다.', () => {
  render(<Home />);
  expect(screen.getByText('게시글 목록')).toBeInTheDocument();
});
