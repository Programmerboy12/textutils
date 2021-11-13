import React, { useState } from 'react'


// The use a handleClick Function 
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = ("");
    setText(newText)
  }

  const handleCopy = () => {
    // console.log("Uppercase was clicked" + text);
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // setText(newText)
  }
  // const handleDownText = ()=>{

  //   const element = document.createElement("a");
  //  const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
  //  element.href = URL.createObjectURL(file);
  //  element.download = "myFile.txt";
  //  document.body.appendChild(element); // Required for this to work in FireFox
  //  element.click();
  // }


  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value)
  }

  // The use state variante function use

  const [text, setText] = useState('');
  // text = "new text" ; wrong way to change the state
  // setText = ("new text") ; Correct way to change the state
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading} - </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="12"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>


        <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear text</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleDownText} >Download text</button> */}


      </div>
      <div className="container my-3">
        <h2>Your text summary </h2>
        <p>{text.split("2").length} words and {text.length} charcter</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Privew</h2>
        <p>{text.length > 0 ? text : "Enter something to priview in the box it here write"}</p>
      </div>
    </>
  )
}

