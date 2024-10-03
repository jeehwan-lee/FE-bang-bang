import React, { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNameProps?: string;
}

function PasswordInput({ classNameProps, ...props }: InputProps) {
  const [visible, setVisible] = useState<boolean>(false);

  const onClickVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative">
      <input
        {...props}
        type={visible ? "text" : "password"}
        className={`text-base py-4 px-2 w-full border-b-2 border-gray-200 focus:outline-none`}
      />

      <img
        onClick={onClickVisible}
        src={visible ? "/icons/invisible.svg" : "/icons/visible.svg"}
        className="w-[24px] h-[24px] absolute top-[20px] right-[10px] hover:cursor-pointer"
      />
    </div>
  );
}

export default PasswordInput;
