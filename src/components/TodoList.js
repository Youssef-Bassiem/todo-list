import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, settodos] = useState([]);
  const oldData = [];
  useEffect(() => {
    for (var i of Object.entries(localStorage))
      oldData.push({ ...JSON.parse(i[1]), id: i[0] });

    settodos(oldData);
  }, []);

  const completeTodo = (id) => {
    settodos(
      todos.map((task) => {
        if (task.id === id) {
          localStorage.setItem(
            id,
            JSON.stringify({
              text: task.text,
              isComplete: !task.isComplete,
            })
          );
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      })
    );
  };

  const addTodo = (id, input) => {
    if (input) {
      localStorage.setItem(
        id,
        JSON.stringify({ text: input, isComplete: false })
      );
      settodos([...todos, { id, text: input, isComplete: false }]);
    }
  };

  const removeTodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
    Object.keys(localStorage).forEach((item) =>
      item === id ? localStorage.removeItem(item) : {}
    );
  };

  const updateTodo = (id, newValue) => {
    if (newValue) {
      settodos((oldTodos) =>
        oldTodos.map((task) => {
          if (task.id === id) {
            localStorage.setItem(
              id,
              JSON.stringify({
                text: newValue,
                isComplete: task.isComplete,
              })
            );
            return { ...task, text: newValue };
          }
          return task;
        })
      );
    }
  };
  
  return (
    <>
      <h1>What's your plan today?</h1>
      <TodoForm addTodo={addTodo} />
      <Todo
        todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </>
  );
};

export default TodoList;
