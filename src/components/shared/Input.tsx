import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNameProps?: string;
}

function Input({ classNameProps, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        className={`text-base font-semibold placeholder:font-normal py-4 px-2 w-full border-b-2 border-gray-200 focus:outline-none`}
      />
    </div>
  );
}

export default Input;
