import "./styles/styles.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getRandomJoke } from "./utils/request.js";

const App = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    getRandomJoke().then((j) => setJoke(j));
  }, []);

  return (
    <div className="container">
      <header>Dad says...</header>
      <div className="joke">
        <p>{joke && joke}</p>
      </div>
      <div className="btn-container">
        <button onClick={() => getRandomJoke().then((j) => setJoke(j))}>
          Please.. no more!
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
