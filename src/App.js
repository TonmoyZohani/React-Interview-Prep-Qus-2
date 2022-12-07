import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    count >= 10 ? setVisible(true) : setVisible(false);
  }, [count]);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>Question 2 - States in React</h2>
      <p>
        <i>To win,count till 10</i>
      </p>

      {/*********************Method One*********************** */}
      {/* <div className="container">
        <h2>Count:{count}</h2>
        <p>Increase</p>
        <button className="btn" type="btn" onClick={() => setCount(count + 1)}>
          +
        </button>
        <p>Decrease</p>
        <button className="btn" type="btn" onClick={() => setCount(count - 1)}>
          -
        </button>{" "}
        <br></br>
        <p>Reset</p>
        <button className="btn" type="btn" onClick={() => setCount(0)}></button>
      </div> */}

      {/*********************Method Two*********************** */}
      <div className="container">
        <h2>Count:{count}</h2>
        <p>Increase</p>
        <button className="btn" type="btn" onClick={() => increase()}>
          +
        </button>
        <p>Decrease</p>
        <button className="btn" type="btn" onClick={() => decrease()}>
          -
        </button>{" "}
        <br></br>
        <p>Reset</p>
        <button className="btn" type="btn" onClick={() => setCount(0)}></button>
      </div>

      <div>
        {isVisible ? (
          <h2>You are Win ✌️ ✌️ </h2>
        ) : (
          <h2>Not much point 🖕 🖕 </h2>
        )}
      </div>
    </>
  );
}

export default App;
