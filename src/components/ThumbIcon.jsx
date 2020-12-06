import React from "react";
import { ThumbIconType } from "../utils";

export const ThumbIcon = ({ type = ThumbIconType.up }) => {
  if (type === ThumbIconType.down) {
    return (
      <span role="img" aria-label="thumb down">
        👎
      </span>
    );
  } else {
    return (
      <span role="img" aria-label="thumb up">
        👍
      </span>
    );
  }
};
