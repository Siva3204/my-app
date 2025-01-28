import React from "react";
// import "./App.css";
import Welcome from "./components/Welcome";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import DecrementCounter from "./components/Decrementcounter";
import About from "./components/About";
import { Home, Contact, Blog } from "./components/About";
import FormSubmitter from "./components/Hw";
import UseEffect from "./components/UseEffect";
function App() {
  return (
    <div>
      <Welcome name="Siva" />
      <Greeting />
      <Counter />
      <DecrementCounter />
      <Home />
      <Contact />
      <About />
      <Blog />
      <FormSubmitter />
      <UseEffect />
    </div>
  );
}

export default App;
