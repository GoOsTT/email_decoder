import React from "react";

const Display = (props) => {
  const { input, isToggled } = props;

  // entity to HTML
  const tagsToReplace = {
    "&": "&amp;",
    "&lt;": "<",
    "&gt;": ">",
    "&nbsp;": " ",
  };

  const newInput = input.toString().replace(/&lt;|&gt;/gi, function (matched) {
    return tagsToReplace[matched];
  });

  //HTML to entity
  const tagsToReplaceBack = {
    "<": "&lt;",
    ">": "&gt;",
  };
  const changeBackInput = input.toString().replace(/<|>/gi, function (matched) {
    return tagsToReplaceBack[matched];
  });

  return (
    <div>
      {isToggled ? <div>{changeBackInput}</div> : <div>{newInput}</div>}
    </div>
  );
};

export default Display;
