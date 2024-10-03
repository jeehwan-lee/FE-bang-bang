import React from "react";

interface TabButtonProps {
  label: string;
  active: boolean;
  onClickTab: () => void;
}

function TabButton({ label, active, onClickTab }: TabButtonProps) {
  return (
    <>
      <button
        className={`py-2 px-4 text-base font-medium w-full ${
          active ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
        }`}
        onClick={onClickTab}
      >
        {label}
      </button>
    </>
  );
}

export default TabButton;
