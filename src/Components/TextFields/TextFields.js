import React from "react";
import { useState } from "react";
import Display from "../EmailPart/Display";
import "./TextFields.css";

const TextFields = () => {
  const [input, setInput] = useState([""]);
  const [isToggled, setToggled] = useState(false);

  return (
    <div class='text_holder'>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        className='input_field'>
        Put your hell code here
      </textarea>
      <p>{isToggled ? "HTML TO HELL" : "HELL TO HTML"}</p>
      <button onClick={() => setToggled(!isToggled)} class='switch_button'>
        <span class='material-icons' id='loop_icon'>
          loop
        </span>
      </button>
      <div class='display_holder'>
        <Display input={input} isToggled={isToggled} />
      </div>
    </div>
  );
};

export default TextFields;
