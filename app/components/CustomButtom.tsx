"use client";

import React from "react";

interface CustomButtomProps {
  title: string;
  className?: string;
  handleclick?: () => void;
  btnType?: "button" | "submit" | "reset";
}

const CustomButtom: React.FC<CustomButtomProps> = (props) => {
  const { title, className, handleclick, btnType } = props;

  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={className}
      onClick={handleclick}
    >
      {title}
    </button>
  );
};

export default CustomButtom;