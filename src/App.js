import React,{useRef} from "react";
import "./style.css";
// import {useRef} from 'react'

export default function App() {
  let inputRef = useRef("anil");

  function handleinput(){
    console.warn("function call")
    // inputRef.current.value="1000"
    // inputRef.current.focus();
    inputRef.current.style.color="red"

  }
  return (
    <div>
      <h1>UseRef in React</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={handleinput}>HandleInput</button>
      
    </div>
  );
}
