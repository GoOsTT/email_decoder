import React from "react";

const Display = (props) => {
  const { input } = props;

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
    "&": "&amp;",
    "&lt;": "<",
    "&gt;": ">",
    "&nbsp;": " ",
  };
  const changeBackInput = input
    .toString()
    .replace(/<|>;/gi, function (matched) {
      return tagsToReplace[matched];
    });

  // gomb kell amivel a kész HTML vissza alakítható hell kóddá
  /* szépíteni kell a szöveget ami kijön
  https://prettier.io/docs/en/browser.html */

  return (
    <>
      <div>
        <div>{newInput}</div>
      </div>
    </>
  );
};

export default Display;
