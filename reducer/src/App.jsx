import "./App.css";
import { useReducer } from "react";

function App() {
  const play = (state, action) => {
    if (action.type == "increase") {
      return { ...state, count: state.count + state.IncrementBy };
    }
    if (action.type == "Decrease") {
      return { ...state, count: state.count - state.IncrementBy };
    }
    if (action.type == "IncrementBy") {
      return { ...state, IncrementBy: action.payload };
    }
    return state;
  };
  const [state, dispatch] = useReducer(play, { count: 0, IncrementBy: 1 });
  return (
    <div>
      {state.count}
      <input
        value={state.IncrementBy}
        type="text"
        onChange={(e) =>
          dispatch({ type: "IncrementBy", payload: Number(e.target.value) })
        }
      />

      <span>
        <button onClick={() => dispatch({ type: "increase", payload: 1 })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "Decrease", payload: 1 })}>
          decrement
        </button>
      </span>
    </div>
  );
}

export default App;
