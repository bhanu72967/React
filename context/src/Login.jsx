import { useContext } from "react";
import { useState } from "react";
import { usersContext } from "./App";

const Login = () => {
  const [id, setId] = useState("");
  const{user,setUser}=useContext(usersContext);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setUser(id)
    setId("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
      <h2>This profile {user}</h2>
    </div>
  );
};

export default Login;
