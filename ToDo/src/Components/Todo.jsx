import { useState } from "react";
import TodoList from "./TodoList";
import "./inlineTodo.css";

const Todo = () => {
  const [Task, setTask] = useState("");
  const [TaskList, setTaskList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(Task.trim() !== ""){
        setTaskList([...TaskList,Task]);
        setTask("");

    }
  };
  return (
    <div>
    <h1 className="header">ToDo App</h1>
      <form onSubmit={handleSubmit} className="form">
        <input className="input"
          onChange={(e) => setTask(e.target.value)}
          type="text"
          value={Task}
        />
        <button type="Submit"  className="button">Add</button>
      </form>
      
        {TaskList.map((task, index) => (
            <div key={index}>
                <TodoList task={task} TaskList={TaskList} setTaskList={setTaskList} />
            </div>
          
        ))}
      
    </div>
  );
};

export default Todo;
