import React from "react";
import "./App.css";
import Header from "./Header";
import Navso from "./NavSo";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Projects />
      </main>
      <footer>
        <Navso />
      </footer>
    </div>
  );
}

export default App;
