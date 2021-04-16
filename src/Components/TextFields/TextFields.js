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
        className='input_field'></textarea>
      <div className='middle_holder'>
        <button onClick={() => setToggled(!isToggled)} class='switch_button'>
          {isToggled ? "HTML TO HELL" : "HELL TO HTML"}
        </button>
      </div>
      <div class='display_holder'>
        <Display input={input} isToggled={isToggled} />
      </div>
    </div>
  );
};

export default TextFields;
