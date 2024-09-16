import { MdDelete, MdEdit } from "react-icons/md";

function ToDo({ todo, deleteTodo, toggleCompleted }) {
  const handleClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className={`todo ${todo.isCompleted ? 'completed': ''}`}>
      <p onClick={() => {toggleCompleted(todo.id)}}>{todo.content}</p>
      <div>
        <MdEdit style={{ cursor: "pointer" }} />
        <MdDelete
          style={{ cursor: "pointer", marginLeft: "5px" }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default ToDo;
