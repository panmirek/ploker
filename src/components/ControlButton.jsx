import React from "react";
import { ThumbIcon } from ".";
import { ControlBtnType, ThumbIconType } from "../utils";

export const ControlButton = ({ type, action = () => {} }) => {
  if (type === ControlBtnType.confirm) {
    return (
      <button className="card-control card-control_ok" onClick={action}>
        <ThumbIcon />
      </button>
    );
  } else if (type === ControlBtnType.clear) {
    return (
      <button className="card-control card-control_clear" onClick={action}>
        <ThumbIcon type={ThumbIconType.down} />
      </button>
    );
  }
};
