import styled from "styled-components";
import { useState, useContext } from "react";
import { TodoContext } from "contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

const StyledForm = styled.form`
  display: flex;
  input {
    width: 14rem;
    padding: 0.5rem;
    font-size: 1rem;
    flex-grow: 1;
  }
  button {
    border: none;
    background-color: #5757de;
    color: #eeeeee;
    padding: 0.5rem 1rem;
  }
`;

const TodoInput = () => {
  const [todoValue, setTodoValue] = useState("");
  const { addNewTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoValue.trim()) {
      window.alert("Todo can not be empty");
      return;
    }
    addNewTodo({ id: uuidv4(), value: todoValue });
    setTodoValue("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        placeholder="Type a new todo"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button variant="contained" type="submit">
        add
      </button>
    </StyledForm>
  );
};

export default TodoInput;
