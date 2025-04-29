
import React, { useState } from "react";
import "./App.css";

function App() {
  const [clickMsg, setClickMsg] = useState("");
  const [doubleClickMsg, setDoubleClickMsg] = useState("");
  const [rightClickMsg, setRightClickMsg] = useState("");
  const [dropMsg, setDropMsg] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputStatusMsg, setInputStatusMsg] = useState("");
  const [invisibleBtnMsg, setInvisibleBtnMsg] = useState("");
  const [disabledBtnMsg, setDisabledBtnMsg] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = () => {
    setDropMsg("Dropped Successfully!");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value && value === value.toUpperCase()) {
      setInputStatusMsg("Typing in ALL CAPS!");
    } else {
      setInputStatusMsg("Typing Successful!");
    }
  };

  const handleClipboardAction = (action) => {
    setInputStatusMsg(`${action} action detected in textbox!`);
  };

  return (
    <div className="container">
      <h1>Action Class Practice Website</h1>

      <section className="section">
        <h2>Simple Click</h2>
        <button onClick={() => setClickMsg("Button Clicked!")}>Click Me</button>
        <p>{clickMsg}</p>
      </section>

      <section className="section">
        <h2>Double Click</h2>
        <div
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
        <h2>Drag and Drop</h2>
        <div className="drag-drop-container">
          <div draggable className="drag-source">
            Drag Me
          </div>
          <div
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
        <h2>Typing & Clipboard</h2>
        <input
          type="text"
          value={inputValue}
          placeholder="Type here..."
          onChange={handleInputChange}
          onPaste={(e) => {
            e.preventDefault();
            navigator.clipboard.readText().then((clipboardText) => {
              const input = e.target;
              const start = input.selectionStart;
              const end = input.selectionEnd;

              const newValue =
                inputValue.substring(0, start) +
                clipboardText +
                inputValue.substring(end);

              setInputValue(newValue);

              const newCursorPosition = start + clipboardText.length;

              setTimeout(() => {
                input.setSelectionRange(newCursorPosition, newCursorPosition);
              }, 0);

              handleClipboardAction("Paste");
            });
          }}
          onCopy={() => handleClipboardAction("Copy")}
          onCut={(e) => {
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            if (start !== end) {
              handleClipboardAction("Cut");
            }
          }}
          className="input-text"
        />
        <p>{inputStatusMsg}</p>
      </section>

      <section className="section">
        <h2>Invisible Button (Hidden Challenge)</h2>
        <button
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
          disabled={!isButtonEnabled}
          className={`btn ${isButtonEnabled ? "" : "disabled"}`}
          onClick={() =>
            setDisabledBtnMsg("Disabled Button Clicked Successfully!")
          }
        >
          Special Button
        </button>
        <p>{disabledBtnMsg}</p>
      </section>
    </div>
  );
}

export default App;
