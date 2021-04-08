import React from "react";
import { useState } from "react";
import "./TextFields.css";

const TextFields = () => {
  const [input, setInput] = useState([""]);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <div>
      <textarea onChange={() => handleChange} className='input_field'>
        At w3schools.com you will learn how to make a website. They offer free
        tutorials in all web development technologies.
      </textarea>
    </div>
  );
};

export default TextFields;
