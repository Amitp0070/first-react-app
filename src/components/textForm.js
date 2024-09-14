// import the reactFunctionalComponents using short "rfc"
import React, { useState } from "react";

// Yeh function `TextForm` component ko define karta hai jo `props` ko accept karega
export default function TextForm(props) {
  // Yeh function tab chalega jab 'Uppercase' button click hoga
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text); // Console mein message print karega aur current text show karega
    let newText = text.toUpperCase(); // Text ko uppercase mein convert karke `newText` variable mein store karega
    setText(newText); // `setText` se state ko update karega aur `newText` ko set karega
  };

  // Yeh function tab chalega jab text area mein koi change hoga
  const handleOnChange = (event) => {
    console.log("On Change"); // Console mein message print karega jab koi change hoga
    setText(event.target.value); // Text area mein jo bhi value dalenge, usko `text` state mein update karega
  };

  // Yeh state define karta hai aur initial value "Enter text her" set karta hai
  const [text, setText] = useState("Enter text her");
  //   setText("new text"); correct way to change the state

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="10"
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
    </div>
  );
}
