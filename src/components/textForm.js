// import the reactFunctionalComponents using short "rfc"
import React, { useState } from "react";

// Yeh function `TextForm` component ko define karta hai jo `props` ko accept karega
export default function TextForm(props) {
  // Yeh function tab chalega jab 'Uppercase' button click hoga
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text); // Console mein message print karega aur current text show karega
    let newText = text.toUpperCase(); // Text ko uppercase mein convert karke `newText` variable mein store karega
    setText(newText); // `setText` se state ko update karega aur `newText` ko set karega
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked" + text); // Console mein message print karega aur current text show karega
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleDeleteClick = () => {
    // console.log("Lowercase was clicked" + text); // Console mein message print karega aur current text show karega
    let newText = "";
    setText(newText);
  };

  const handleExtraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopy = () => {
    // console.log("I am copy")
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleClearClick = () => {
    // window.getSelection() se selected text ko get karenge
    const selection = window.getSelection();

    // Selected text ko string mein convert karenge
    const selectedText = selection.toString();

    // Agar koi text select kiya gaya hai toh
    if (selectedText) {
      // Jo selected text hai usko replace karke khali string "" karenge
      let newText = text.replace(selectedText, "");

      // setText(newText) se updated text ko set karenge
      setText(newText);
    }
  };

  // Yeh function tab chalega jab text area mein koi change hoga
  const handleOnChange = (event) => {
    console.log("On Change"); // Console mein message print karega jab koi change hoga
    setText(event.target.value); // Text area mein jo bhi value dalenge, usko `text` state mein update karega
  };

  // Yeh state define karta hai aur initial value "Enter text her" set karta hai
  const [text, setText] = useState("");
  //   setText("new text"); correct way to change the state

  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="container p-2">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#1e1e1e6e" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="myBox"
              rows="10"
            ></textarea>
            <button
              className="btn btn-primary my-2 mx-1"
              onClick={handleUpClick}
            >
              Convert to Uppercase
            </button>
            <button
              className="btn btn-primary my-2 mx-1"
              onClick={handleLoClick}
            >
              Convert to Lowercase
            </button>

            <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>
              Copy text
            </button>
            <button
              className="btn btn-primary my-2 mx-1"
              onClick={handleExtraspace}
            >
              Remove ExtraSpace
            </button>
            <button
              className="btn btn-danger my-2 mx-1"
              onClick={handleClearClick}
            >
              Clear selected text
            </button>
            <button
              className="btn btn-danger my-2 mx-1"
              onClick={handleDeleteClick}
            >
              Clear all Text
            </button>
          </div>
        </div>
        <div className="container my-2">
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} character
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h3>Preview</h3>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here!"}
          </p>
        </div>
      </div>
    </>
  );
}
