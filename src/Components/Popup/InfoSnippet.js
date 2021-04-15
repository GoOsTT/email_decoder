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
        <div className='header'> Useful informations </div>
        <div className='content'>
          {" "}
          <h2>Usage of the app</h2>
          <ul>
            <li>
              Paste your mail code that you'd like to work with to the "Put your
              hell code here" part.
            </li>
            <li>
              The email is automatically translates into HTML, that you can see
              on the right text box.
            </li>
            <li>
              Copy the freshly translated code on the right, and paste it into
              the box that says "Insert your freshly translated and formatted
              hell code below".
            </li>
            <li>
              The code should execute in a second, and you can see your code on
              the right as it should be. Everything should be styled just the
              way they are in the mail. Expectations may occure.
              <span className='red_star'>*</span>
            </li>
            <li>
              If the editor isn't loading and all you can see is the "Insert
              your freshly translated..." text, just refresh the page.
            </li>
            <li>
              If the code you pasted won't load, you can see a tiny "Rerun"
              buton on the most right bottom part of the editor.
            </li>
            <li>
              You can choose to only see the HTML code on the editor or only the
              Result by switching in the editor.
            </li>
            <li>
              The most amazing part is that even though your new HTML text isn't
              formatted properly, you can search in the editor with the usual
              "CTR+F//CMD+F". The highlited searhc it finds is a bit hard to
              find but manageable.
            </li>
            <li>
              After finishing the mail you edited, just grab the HTML code,
              paste it into the text field on the upper left, switch the button
              to "HTML to Hell Code" and you are ready to paste it into
              Maintenance.
            </li>
          </ul>
          <h2>General informations</h2>
          <ul>
            <li>
              The app is using codepen.io as it's editor, that you can see down
              below.
            </li>
            <li>
              The app is using codepen's api so there is no dangerously set html
              involved so there should be no fear from xss attacks.
            </li>
            <li>
              The translation is backwards compatible, meaning you can translate
              your edited HTML back to the mail populated with HTML entities
            </li>
            <li>
              <span className='red_star'>*</span>Unfortunately the non-breaking
              /& nbsp;/ spaces could not be translated to HTML so if You see
              them in any of the code or in the visually tranlated code on the
              bottom right, just assume its a space.
            </li>
          </ul>
          <p>
            You can contact me with any questions at:{" "}
            <a href='mailto:mark.baranyi@cewe.hum' className='link_tag'>
              Mark Baranyi
            </a>{" "}
          </p>
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
