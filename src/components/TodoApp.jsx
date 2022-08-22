import styled from "styled-components";
import TodoInput from "components/TodoInput";
import TodoList from "components/TodoList";

const StyledApp = styled.div`
  padding: 1rem;
  border: 1px solid #cecece;
  max-width: 768px;
  margin: 0 auto;
`;

const TodoApp = () => {
  return (
    <StyledApp>
      <h1>Star Todo</h1>
      <TodoInput />
      <TodoList />
    </StyledApp>
  );
};

export default TodoApp;
