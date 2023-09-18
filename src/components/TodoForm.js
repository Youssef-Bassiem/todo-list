import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

const TodoForm = ({ editTodo, addTodo, edit }) => {
  const [input, setinput] = useState(edit ? edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  },[]);
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
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setinput(e.target.value);
        }}
        value={input}
        placeholder={edit ? "Update task" : "Add a new task"}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {edit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
