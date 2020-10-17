import React from "react";
import "./App.css";
import Header from "./Header";
import Navso from "./NavSo";
import Projects from "./Projects";
import Skills from "./Skills";
import Cv from "./Cv"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Skills />
        <Projects />
      </main>
      <footer>
        <Navso />
      </footer>
    </div>
  );
}

export default App;
