import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const removeTodo = (todo) => {
    let response = window.confirm(`Are you agree to remove the ${todo.value}?`);
    if (!response) return;
    setTodos((prevState) => prevState.filter((td) => td.id !== todo.id));
  };

  const clearAll = () => {
    let response = window.confirm("Are you sure?");
    response && setTodos([]);
  };

  useEffect(() => {
    const todos = window.localStorage.getItem("todos");
    todos && setTodos(JSON.parse(todos));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return <TodoContext.Provider value={{ todos, addNewTodo, removeTodo, clearAll }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
