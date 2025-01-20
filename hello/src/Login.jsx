import { useState } from "react";

const Login = () => {
  const [Name, setName] = useState({ FirstName: "", LastName: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Name);
  };
  return (
    <div>
      {Name.FirstName} {Name.LastName}
      <form>
        <input
          onChange={(e) => {
            setName({ ...Name, FirstName: e.target.value });
          }}
          type="text"
          value={Name.FirstName}
        ></input>
        <input
          onChange={(e) => setName({ ...Name, LastName: e.target.value })}
          type="text"
          value={Name.LastName}
        ></input>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
};

export default Login;
