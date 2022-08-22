import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "contexts/TodoContext";

const StyledTodo = styled.div`
  padding: 0.25rem 0.5rem;
  border: 1px solid #cecece;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: none;
    background-color: #e55653;
    color: #eeeeee;
    padding: 0.5rem 1rem;
  }
`;

const Todo = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);
  return (
    <StyledTodo>
      <span>{todo.value}</span>
      <button onClick={() => removeTodo(todo)}>X</button>
    </StyledTodo>
  );
};

export default Todo;
