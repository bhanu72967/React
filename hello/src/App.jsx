import "./App.css";
import Conditional from "./Conditional";
import Counter from "./Counter";
import Fruits from "./Fruits";
import Hello from "./Hello";
import Login from "./Login";
import Message from "./Message";
import Props from "./Props";
import Vegetables from "./Vegetables";

function App() {
  const Person = {
    name: "Suresh",
    Message: "hello Good Morning",
    PhoneNumber: 934730876,
  };

  return (
    <>
      <Hello />
      <Props
        name="Suresh"
        Message="Hello good morning"
        PhoneNumber={93473087}
        Person={Person}
      />
      <Conditional />
      <Message />
      <Fruits />
      <Vegetables />
      <Counter />
      <Login />
    </>
  );
}

export default App;
