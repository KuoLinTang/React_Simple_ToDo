import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function ToDo({ todo, deleteTodo, toggleCompleted, toggleEditing, editTodo }) {
  const handleClick = () => {
    deleteTodo(todo.id);
  };

  return todo.isEditing ? (
    <EditForm editTodo={editTodo} todo={todo} />
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <MdEdit
          style={{ cursor: "pointer" }}
          onClick={() => {
            toggleEditing(todo.id);
          }}
        />
        <MdDelete
          style={{ cursor: "pointer", marginLeft: "5px" }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default ToDo;
