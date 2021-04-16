import React from "react";
import { useState } from "react";

const Display = (props) => {
  const { input, isToggled } = props;

  const [isCopied, setCopied] = useState(false);

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

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(isToggled ? changeBackInput : newInput);
    setCopied(!isCopied);
    setTimeout(function () {
      setCopied(false);
    }, 1000);
  };

  /* https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard*/

  return (
    <>
      <div>
        {isToggled ? <div>{changeBackInput}</div> : <div>{newInput}</div>}
      </div>
      <div>
        {isCopied ? (
          <button onClick={() => setCopied(!isCopied)}>Code Copied</button>
        ) : (
          <button onClick={() => copyToClipBoard()}>Click to copy</button>
        )}
      </div>
    </>
  );
};

export default Display;
