import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, settodos] = useState([]);
  const completeTodo = (id) => {
    settodos(
      todos.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const addTodo = (id, input) => {
    if (input) settodos([...todos, { id, text: input, isComplete: false }]);
  };
  const removeTodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newValue) => {
    if (newValue) {
      settodos((oldTodos) =>
        oldTodos.map((task) =>
          task.id === id ? { ...task, text: newValue } : task
        )
      );
    }
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <Todo
        todos={todos}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </>
  );
};

export default TodoList;
