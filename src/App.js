import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter, Routes, Route, matchPath } from "react-router-dom";

//let name = "Sid";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let showAlert = (type, message, color) => {
    setAlert({
      type: type,
      msg: message,
      color: color,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Success!", "Enabled dark mode successfully", "success");
      document.title = "Text Utils - Dark Mode";
      setInterval(() => {
        document.title = "Me MC hu";
      }, 1000);
      setInterval(() => {
        document.title = "Jo isme aaya";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Success!", "Disabled dark mode successfully", "danger");
      document.title = "Text Utils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          abt="About"
          mode={mode}
          toggle={toggleMode}
        />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter text below:"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
