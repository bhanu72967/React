import { useState } from "react";
import "./App.css";
import { useReducer } from "react";

const App = () => {
  const [amount, setAmount] = useState(0);
  const reducer = (state, action) => {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type == "sub") {
      return { ...state, balance: state.balance - action.payload };
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, { balance: 0 });

  return (
    <div>
      {state.balance}
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch({ type: "sub", payload: Number(amount) })}
      >
        WithDraw
      </button>
    </div>
  );
};

export default App;
