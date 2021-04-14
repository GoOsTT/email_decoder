import "./App.css";

// component imports
import TextFields from "../TextFields/TextFields";
import CodePen from "../CodePen";
import InfoSnippet from "../Popup/InfoSnippet";
/* import Display from "../EmailPart/Display"; */

const Header = () => {
  return (
    <header className='header'>
      <InfoSnippet />
      <img
        src='https://cewe.hu/cdn/dw/du/dWdUeGlGNld2Q3RXS203SW1jWHFoQT09'
        alt='cewe_logo'
        className='cewe_logo'
      />
    </header>
  );
};

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div>
        <TextFields />
      </div>
      <div>
        <CodePen />
      </div>
    </div>
  );
};

export default App;
