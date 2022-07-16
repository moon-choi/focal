import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const resetText = props.resetText //pass things to component , assingning a new variable
  //props is an object.

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "lightgrey",
        padding: "5%",
      }}
    >
      <h1 onClick={(props) => {
        resetText();
      }}>Reset</h1>
    </div>
  )
};


const Application = () => {

  const [name, setName] = useState(''); //''is an initial name 
  //setName is a function

  // this 'reset' is a FUNCTION
  const reset = () => {
    setName('') //parameter will be a new name
  }

  return (
    <main>
      <input value={name} placeholder="Type your name" onChange={(event) => setName(event.target.value)}></input>
      <Button resetText={reset}></Button>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
