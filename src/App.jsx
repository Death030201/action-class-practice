// App.js
import React, { useState } from "react";
import "./App.css"; // We will keep styling clean here

function App() {
  const [clickMsg, setClickMsg] = useState("");
  const [doubleClickMsg, setDoubleClickMsg] = useState("");
  const [rightClickMsg, setRightClickMsg] = useState("");
  const [hoverMsg, setHoverMsg] = useState("");
  const [dropMsg, setDropMsg] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [invisibleBtnMsg, setInvisibleBtnMsg] = useState("");
  const [disabledBtnMsg, setDisabledBtnMsg] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    setDropMsg("Dropped Successfully!");
  };

  return (
    <div className="container">
      <h1>Action Class Full Practice Website</h1>

      <section className="section">
        <h2>Simple Click</h2>
        <button
          id="clickButton"
          onClick={() => setClickMsg("Button Clicked!")}
        >
          Click Me
        </button>
        <p>{clickMsg}</p>
      </section>

      <section className="section">
        <h2>Double Click</h2>
        <div
          id="doubleClickArea"
          onDoubleClick={() => setDoubleClickMsg("Double Click Successful!")}
          className="action-box blue"
        >
          Double Click Here
        </div>
        <p>{doubleClickMsg}</p>
      </section>

      <section className="section">
        <h2>Right Click</h2>
        <div
          id="rightClickArea"
          onContextMenu={(e) => {
            e.preventDefault();
            setRightClickMsg("Right Click Successful!");
          }}
          className="action-box green"
        >
          Right Click Here
        </div>
        <p>{rightClickMsg}</p>
      </section>

      <section className="section">
        <h2>Hover</h2>
        <div
          id="hoverArea"
          onMouseOver={() => setHoverMsg("Hover Successful!")}
          className="action-box red"
        >
          Hover Over Me
        </div>
        <p>{hoverMsg}</p>
      </section>

      <section className="section">
        <h2>Drag and Drop</h2>
        <div className="drag-drop-container">
          <div
            id="dragSource"
            draggable
            className="drag-source"
          >
            Drag Me
          </div>

          <div
            id="dropTarget"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="drop-target"
          >
            Drop Here
          </div>
        </div>
        <p>{dropMsg}</p>
      </section>

      <section className="section">
  <h2>Typing</h2>
  <input
    id="textInput"
    type="text"
    value={inputValue}
    placeholder="Type here..."
    onChange={(e) => setInputValue(e.target.value)}
    className="input-text"
  />
  <p>
    {inputValue
      ? inputValue === inputValue.toUpperCase()
        ? "Typed in ALL CAPS!"
        : "Typing Successful!"
      : ""}
  </p>
</section>

      <section className="section">
        <h2>Invisible Button (Hidden Challenge)</h2>
        <button
          id="hiddenButton"
          className="hidden"
          onClick={() => setInvisibleBtnMsg("Invisible Button Clicked!")}
        >
          Hidden Button
        </button>
        <p>{invisibleBtnMsg}</p>
      </section>

      <section className="section">
        <h2>Disabled Button Control</h2>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="enable"
              value="yes"
              onChange={() => setIsButtonEnabled(true)}
            />
            Enable Button
          </label>

          <label>
            <input
              type="radio"
              name="enable"
              value="no"
              onChange={() => setIsButtonEnabled(false)}
            />
            Disable Button
          </label>
        </div>

        <button
          id="disabledButton"
          disabled={!isButtonEnabled}
          className={`btn ${isButtonEnabled ? "" : "disabled"}`}
          onClick={() => setDisabledBtnMsg("Disabled Button Clicked Successfully!")}
        >
          Special Button
        </button>
        <p>{disabledBtnMsg}</p>
      </section>
    </div>
  );
}

export default App;