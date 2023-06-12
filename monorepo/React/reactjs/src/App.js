import "./App.css";
import React from "react";
import { useState } from "react";
// import img from "./assets/images/crows.jpg";
import logo from "./assets/images/Logo.jpeg";
import HeadFootContainer from "./components/HeadFootContainter";
import ElementList from "./components/ElementList";
import img from "./assets/images/crows.jpg";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  const [step, setStep] = useState("1/2");
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: "1",
      img: img,
      title: "Anti Wrinkle Treatment",
      icon: faAngleRight,
    },
    {
      id: "2",
      img: img,
      title: "Anti Wrinkle Treatment",
      icon: faAngleRight,
    },
    {
      id: "3",
      img: img,
      title: "Anti Wrinkle Treatment",
      icon: faAngleRight,
    },
    {
      id: "4",
      img: img,
      title: "Anti Wrinkle Treatment",
      icon: faAngleRight,
    },
  ];
  const handleSelectedItem = (option) => () => {
    setSelectedOption(option);
    setStep("2/2");
  };

  const handleGoBack = () => {
    setSelectedOption(null);
    setStep("1/2");
  };
  return (
    <>
      <HeadFootContainer>
        <h2>Choose Service</h2>
        <p>Step {step}</p>
      </HeadFootContainer>
      <main>
        {selectedOption ? (
          <>
            <h2>{selectedOption.title}</h2>
            <button onClick={handleGoBack}>
              <FontAwesomeIcon icon={faAngleLeft} /> Go Back
            </button>
          </>
        ) : (
          <>
            <ElementList
              items={options}
              handleSelectedItem={handleSelectedItem}
            />
            <ul>
              <p className="phoneNum">
                Not sure about consultation type? Please, call
                <span> 0203 7959063</span>
              </p>
            </ul>
          </>
        )}
      </main>

      <HeadFootContainer>
        <h4>
          Powered by<img src={logo} alt="pabau"></img>
        </h4>
      </HeadFootContainer>
    </>
  );
}

export default App;
