import React from "react";
import Popup from "reactjs-popup";

import "./modal.css";

const InfoSnippet = () => (
  <Popup
    trigger={
      <button className='button'>
        {" "}
        <span class='material-icons' id='question_mark'>
          help_outline
        </span>{" "}
      </button>
    }
    modal
    nested>
    {(close) => (
      <div className='modal'>
        <button className='close' onClick={close}>
          &times;
        </button>
        <div className='header'> Modal Title </div>
        <div className='content'>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
          nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
          quibusdam voluptates delectus doloremque, explicabo tempore dicta
          adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
          alias. Vitae?
        </div>
      </div>
    )}
  </Popup>
);

/*
snippet documentation:
https://react-popup.elazizi.com/react-modal
*/
export default InfoSnippet;
