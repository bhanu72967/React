import PropTypes from "prop-types";
import "./listtodo.css";

const TodoList = ({ task, TaskList , setTaskList }) => {
  const handleDelete = (index) =>{
    setTaskList(TaskList.filter((_,i)=> i !== index));

  }
  return (
    <div className="list">
      <li>{task}</li>
      <span>
      <button className="buttonX" onClick={()=>handleDelete(TaskList.indexOf(task))}>X</button>
      </span>
    </div>
  );
};
TodoList.propTypes = {
  task: PropTypes.string.isRequired,
  TaskList: PropTypes.array.isRequired,
  setTaskList: PropTypes.func.isRequired
};

export default TodoList;
