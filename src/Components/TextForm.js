import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "random" cannot do this
  // setText("random") can do this
  const [p1Text, setP1Text] = useState("");
  const [value, setValue] = useState("");

  let onChangeFun = (event) => {
    //console.log("text typed");
    setText(event.target.value);
  };

  let changeToUpper = () => {
    //console.log("Buttton clicked");
    setValue("Converted to Uppercase:");
    setP1Text(text.toUpperCase());
    props.showAlert("Success!", "Converted to uppercase.", "success")
  };

  let changeToLower = () => {
    setValue("Converted to Lowercase:");
    setP1Text(text.toLowerCase());
    props.showAlert("Success!", "Converted to lowercase.", "success")
  };

  let changeToSentense = () => {
    setValue("Converted to Sentense:");
    setP1Text(text.charAt(0).toUpperCase() + text.slice(1));
    props.showAlert("Success!", "Converted to sentence case.", "success")
  };

  let timeRead = () => {
    setValue("Time required to read text:");
    setP1Text("Around " + Math.round(0.008*(text.split(" ").length)) + " minutes");
  };

  return (
    <>
      <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter your text here..."
          value={text}
          onChange={onChangeFun}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={changeToUpper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={changeToLower}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={changeToSentense}>
          Convert to Sentense Case
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={timeRead}>
          Time to read
        </button>
      </div>
      <div className="container">
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>This text contains total {text.trim().length === 0 ? 0 : text.trim().split(" ").length} words and {text.length} characters.</p>
        <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>{value}</h3>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>{p1Text}</p>
      </div>
    </>
  );
}
