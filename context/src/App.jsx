import './App.css'
import { createContext } from 'react'
import Login from './Login';
import { useState } from 'react';
export const usersContext =  createContext();

function App() {
  const[user,setUser] = useState("");

  return (<>
    <usersContext.Provider value={{user, setUser}}>
      <Login />
    </usersContext.Provider>
  </>
  )
}

export default App
