import styled from "styled-components";
import Todo from "components/Todo";
import { useContext } from "react";
import { TodoContext } from "contexts/TodoContext";

const StyledList = styled.div`
  .remove-all {
    display: none;
    &--show {
      display: flex;
      justify-content: flex-end;
      margin-top: 0.5rem;
      button {
        border: none;
        background-color: #ea2f2c;
        color: #eeeeee;
        padding: 0.5rem 1rem;
        margin-top: 0.5rem;
      }
    }
  }
`;

const TodoList = () => {
  const { todos, clearAll } = useContext(TodoContext);

  return (
    <StyledList>
      <div className={todos.length >= 1 ? "remove-all--show" : "remove-all"}>
        <button onClick={clearAll}>Clear</button>
      </div>
      {todos.map((todo) => (
        <h1 key={todo.id}>
          <Todo todo={todo} />
        </h1>
      ))}
    </StyledList>
  );
};

export default TodoList;
