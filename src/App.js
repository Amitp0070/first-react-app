import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743'
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
    }
  };

  return (
    <>
      {/* <Navbar/> */}
      <Navbar
        Home="Home"
        About="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-2">
        <TextForm heading="Enter the text here to analyze below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
