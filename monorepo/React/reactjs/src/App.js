import "./App.css";
import img from "./assets/images/crows.jpg";

function App() {
  return (
    <>
      <header>
        <h2>Choose Service</h2>
        <p>Step 1/2</p>
      </header>
      <main>
        <ul>
          <li>
            <div>
              <img src={img} alt="img"></img>
              <p>Anti Wrinkle Treatment</p>
            </div>
            <p> > </p>
          </li>
          <li>
            <div>
              <img src={img} alt="img"></img>
              <p>Anti Wrinkle Treatment</p>
            </div>
            <p> > </p>
          </li>
          <li>
            <div>
              <img src={img} alt="img"></img>
              <p>Anti Wrinkle Treatment</p>
            </div>
            <p> > </p>
          </li>
          <li>
            <div>
              <img src={img} alt="img"></img>
              <p>Anti Wrinkle Treatment</p>
            </div>
            <p> > </p>
          </li>
          <li>
            <div>
              <img src={img} alt="img"></img>
              <p>Anti Wrinkle Treatment</p>
            </div>
            <p> > </p>
          </li>
          <li>
            <div>
              <img src={img} alt="img"></img>
              <p>Anti Wrinkle Treatment</p>
            </div>
            <p> > </p>
          </li>
        </ul>
        <ul>
          <p className="phoneNum">
            Not sure about consultation type? Please, call
            <span> 0203 7959063</span>
          </p>
        </ul>
      </main>
      <header>
        <h3>Powered by Pabau</h3>
      </header>
    </>
  );
}

export default App;
