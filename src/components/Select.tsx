import { useState } from "react";
// 이건 혹시 없으면 설치하거나 다른 svg를 활용해야 합니다. svg는 그냥 chevron-down, chevron-up을 구글에서 검색헤서 사용해보세요. svg 사용법도 검색하면 다 나옵니다.
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");

  const options = ["최신순", "리뷰순", "평점순"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    // w-32를 화면 사이즈에 맞게 변경합니다.
    <div className="relative w-fit font-sans sm:w-30 md:w-36">
      {/* Select button */}
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between bg-black px-2 py-1 text-left text-gray-400 transition-colors hover:text-gray-300"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-sm">{selected}</span>
        {isOpen ? (
          <ChevronUp size={16} className="text-gray-400" />
        ) : (
          <ChevronDown size={16} className="text-gray-400" />
        )}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full border border-gray-700 bg-black shadow-lg">
          <ul className="py-1" role="listbox">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => selectOption(option)}
                className={`cursor-pointer px-2 py-1 text-sm ${
                  option === selected
                    ? "font-medium text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                role="option"
                aria-selected={option === selected}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
