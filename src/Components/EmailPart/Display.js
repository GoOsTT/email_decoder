import React from "react";

const Display = (props) => {
  const { input } = props;

  const tagsToReplace = {
    "&": "&amp;",
    "&lt;": "<",
    "&gt;": ">",
    "&nbsp;": " ",
  };

  const newInput = input.toString().replace(/&lt;|&gt;/gi, function (matched) {
    return tagsToReplace[matched];
  });

  return (
    <>
      <div>
        <div>{newInput}</div>
      </div>
    </>
  );
};

export default Display;
