import { useState } from "react";
import TodoList from "./TodoList";

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
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTask(e.target.value)}
          type="text"
          value={Task}
        />
        <button type="Submit">Add</button>
      </form>
      
        {TaskList.map((task, index) => (
            <div key={index}>
                <TodoList task={task}/>
            </div>
          
        ))}
      
    </div>
  );
};

export default Todo;
