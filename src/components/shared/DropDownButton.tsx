import React, { useState } from "react";
import Text from "./Text";

interface DropDownButtonProps {
  options: string[];
  onSelect: (option: string) => void;
}

const DropDownButton: React.FC<DropDownButtonProps> = ({
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("전체보기");

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left hover:cursor-pointer">
      <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <Text label={selectedOption} color="gray-900" size="base" bold={true} />
        <div className="w-[6px]"></div>
        <span className="ml-1">▼</span>
      </div>

      {isOpen && (
        <div className="absolute mt-2 w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
