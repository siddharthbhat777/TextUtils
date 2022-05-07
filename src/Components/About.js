import React from "react";

export default function About(props) {
  return (
    <>
      <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>About</h1>
      <div className="card">
        <div className={`card-header bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`}>Quote</div>
        <div className={`card-body bg-${props.mode==='light'?'light':'dark'}`}>
          <blockquote className={`blockquote mb-0 bg-${props.mode==='light'?'white':'black'}`}>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>A well-known quote, contained in a blockquote element.</p>
            <footer className={`blockquote-footer text-${props.mode==='light'?'grey':'light'}`}>
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
}
