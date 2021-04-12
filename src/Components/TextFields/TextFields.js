import React from "react";
import { useState } from "react";
import Display from "../EmailPart/Display";
import "./TextFields.css";

const TextFields = () => {
  const [input, setInput] = useState([""]);

  return (
    <div class='text_holder'>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        className='input_field'>
        Put your amazing shit here
      </textarea>
      <div class='display_holder'>
        <Display input={input} />
      </div>
    </div>
  );
};

export default TextFields;
