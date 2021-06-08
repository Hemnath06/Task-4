import React from "react";
import "./App.css";
import Hello from "./components/hello.js";
import Welcome from "./components/welcome.js";
import JsxExample from "./components/JsxExample.js";
import Example from "./components/Example.js";

export default function App(){
  return(<div className="App">
    <h1>React-App</h1>
    <Hello />
    <Welcome />
    <JsxExample />
    <Example />
    </div>)
}