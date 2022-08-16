import React from "react";

export default function About(props) {
  return (
    <>
      <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>About</h1>
      <div className="card">
        <div className={`card-body bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
          <blockquote className={`blockquote mb-0 bg-${props.mode === 'light' ? 'white' : 'black'}`}>
            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>This is a web application based on the text utilities, where the following features will be included:
              <ul>
                <li>Text entered can be converted into Uppercase, Lowercase and Sentence case.</li>
                <li>How much approximately time will be required to read the text can also be calculated.</li>
                <li>Number of words and character in the text will be calculated.</li>
              </ul>
            </p>
          </blockquote>
        </div>
      </div>
    </>
  );
}
