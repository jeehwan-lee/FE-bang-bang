import React from "react";
import { useNavigate } from "react-router-dom";
import chevronLeftIcon from "../../icons/chevron-left.svg";

interface BackButtonProps {
  classNameProps?: string;
}
function BackButton({ classNameProps }: BackButtonProps) {
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  return (
    <>
      <img
        onClick={onClickBackButton}
        src={chevronLeftIcon}
        className={`${classNameProps} w-[20px] h-[20px] hover:cursor-pointer`}
      />
    </>
  );
}

export default BackButton;
