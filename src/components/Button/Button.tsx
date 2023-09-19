import React from "react";

interface IButtonProps {
  children?: React.ReactNode;
  onClickFn: (val: string) => void;
  text: string;
}

const Button: React.FC<IButtonProps> = ({ children, onClickFn, text }) => {
  return <button onClick={() => onClickFn(text)}>{text}</button>;
};

export default Button;
