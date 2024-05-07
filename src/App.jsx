import './App.css';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import styled from 'styled-components';
import FilterTodo from './components/FilterTodo';
import { useState } from 'react';

function App() {
  const [isTrue, setIsTrue] = useState(false);

  const handleDay = () => {
    setIsTrue((prev) => !prev);
  };

  return (
    <TodoProvider>
      <FilterTodo isTrue={isTrue} handleDay={handleDay} />
      <StyledContainerDiv isTrue={isTrue}>
        <h1>TODO-LIST</h1>
        <AddTodo />
        <TodoList />
      </StyledContainerDiv>
    </TodoProvider>
  );
}

export default App;

const StyledContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.15);
  padding: 30px;
  background-color: ${({ isTrue }) => (!isTrue ? 'white' : '#002b64')};
  h1 {
    color: #2b69ba;
    margin-bottom: 20px;
  }
`;
