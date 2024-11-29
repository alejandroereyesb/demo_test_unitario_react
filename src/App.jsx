import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = (increment) => {
    setCount(count + increment);
  };

  return (
    <>
    <h1>Bolito desplegado con CI/CD</h1>
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          learn react
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev">
          <p>aprende react!</p>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 id="title">Vite + React + Docker + Testing + Linters + Github Actions + Render</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <button onClick={() => setCount(0)}>
          Reset count 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        <Button increment={1} onClickFunction={incrementCount} />
        <Button increment={10} onClickFunction={incrementCount} />
        <Button increment={100} onClickFunction={incrementCount} />
        <Button increment={1000} onClickFunction={incrementCount} />
        <br />
        <span>{count}</span>
      </section>
    </>
  );
}

export default App;
