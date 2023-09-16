import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState(null);
  const edited = (val) => {
    updateTodo(edit.id, val);
    setEdit(null);
    document.getElementsByTagName("form")[0].style.display = "block";
  };

  if (edit) {
    document.getElementsByTagName("form")[0].style.display = "none";
    return <TodoForm edit={edit} editTodo={edited} />;
  } else {
    return (
      <>
        {todos.map((task, index) => (
          <div
            className={task.isCompleted ? "todo-row completed" : "todo-row"}
            key={index}
          >
            <div key={task.id} onClick={() => completeTodo(task.id)}>
              {task.text}
            </div>
            <div className="icons"></div>
            <RiCloseCircleLine
              onClick={() => {
                removeTodo(task.id);
              }}
            />
            <TiEdit
              onClick={() => {
                setEdit({
                  id: task.id,
                  text: task.text,
                  isComplete: task.isComplete,
                });
              }}
            />
          </div>
        ))}
      </>
    );
  }
};

export default Todo;
