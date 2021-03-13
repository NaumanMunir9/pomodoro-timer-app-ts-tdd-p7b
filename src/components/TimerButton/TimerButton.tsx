import React from "react";
import "./TimerButton.css";

export interface TimerButtonProps {
  buttonAction: () => void;
  buttonValue: string;
}

const TimerButton: React.FC<TimerButtonProps> = ({
  buttonAction,
  buttonValue,
}) => {
  return (
    <div className="button-container" onClick={() => buttonAction()}>
      <p className="button-value">{buttonValue}</p>
    </div>
  );
};

export default TimerButton;
