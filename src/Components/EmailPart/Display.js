import React from "react";
import { useState } from "react";

const Display = (props) => {
  const { input } = props;
  return (
    <div>
      <p>{input}</p>
    </div>
  );
};

export default Display;
