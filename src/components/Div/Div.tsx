import React from "react";
import Button from "../Button/Button";

interface IDivProps {
  onClickFn: (val: string) => void;
  text: string;
}

const Div: React.FC<IDivProps> = ({ onClickFn, text }) => {
  return (
    <div>
      <Button text={text} onClickFn={onClickFn} />
    </div>
  );
};

export default Div;
