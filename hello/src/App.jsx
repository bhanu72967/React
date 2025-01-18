import "./App.css";
import Conditional from "./Conditional";
import Counter from "./Counter";
import Fruits from "./Fruits";
import Hello from "./Hello";
import Message from "./Message";
import Props from "./Props";
import Vegetables from "./Vegetables";

function App() {
const Person = {
  name: "Suresh",
  Message: "hello Good Morning",
  PhoneNumber: 934730876
}

  return (
    <>

    <Hello />
    <Props name="Suresh" Message="Hello good morning" PhoneNumber={93473087} Person={Person}/>
    <Fruits />
     
      <Vegetables />
      <Conditional />
      <Message />
      <Counter />
    </>
  );
}

export default App;
