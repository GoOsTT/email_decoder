import React from "react";

const Display = (props) => {
  const { input } = props;

  const tagsToReplace = {
    "&": "&amp;",
    "&lt;": "<",
    "&gt;": ">",
  };

  const newInput = input.toString().replace(/&lt;|&gt;/gi, function (matched) {
    return tagsToReplace[matched];
  });

  //próba mondat
  /* &lt;v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"&gt; */

  return <div>{newInput}</div>;
};

export default Display;
