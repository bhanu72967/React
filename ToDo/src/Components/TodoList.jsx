import PropTypes from 'prop-types';

const TodoList = ({task}) => {
  return (
    <div>
        <ul>
            <li>{task}</li>
        </ul>
    </div>
  )
}
TodoList.propTypes ={
    task: PropTypes.string.isRequired,
}

export default TodoList