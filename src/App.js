import "./App.css";
import React from "react";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Works from "./components/Works";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Hero />
      <Aboutme />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
