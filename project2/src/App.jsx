import { useState } from "react";
import StartGame from "./Components/StartGame";
import PlayGame from "./Components/PlayGame";

function App() {
  const[isStarted,setIsStarted]= useState(true);
  const toggleGame = () =>{
    setIsStarted(pre => !pre)
  };

  return (
    <>
    {isStarted ? <PlayGame/> : <StartGame toggle={toggleGame} />}

    </>
  )
}

export default App

