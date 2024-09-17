import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/textForm";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Navbar Home="Home" About="About Us" />
      <div className="container my-2">
        {/* <TextForm heading = "Enter the text here to analyze below" /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
