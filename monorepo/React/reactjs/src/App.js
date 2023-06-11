import "./App.css";
import React from "react";
// import img from "./assets/images/crows.jpg";
import logo from "./assets/images/Logo.jpeg";
import HeadFootContainer from "./components/HeadFootContainter";
import ElementList from "./components/ElementList";
function App() {
  return (
    <>
      <HeadFootContainer>
        <h2>Choose Service</h2>
        <p>Step 1/2</p>
      </HeadFootContainer>
      <main>
        <ElementList />
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
