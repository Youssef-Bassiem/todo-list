import { useState } from "react";
import { v4 as uuid } from "uuid";

const TodoForm = ({ editTodo, addTodo, edit }) => {
  const [input, setinput] = useState(edit ? edit.text : "");
  const handleClick = () => {
    setinput("");
    edit ? editTodo(input) : addTodo(uuid(), input);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        onChange={(e) => {
          setinput(e.target.value);
        }}
        value={input}
        placeholder="Add a new task"
      />
      <input
        type="button"
        onClick={() => {
          handleClick();
        }}
        value={"Add"}
      />
    </form>
  );
};

export default TodoForm;
