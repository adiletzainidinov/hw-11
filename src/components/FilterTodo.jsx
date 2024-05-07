import React, { useContext, useState } from 'react';
import { styled } from 'styled-components';
import { TodoContext } from '../context/TodoContext';

const FilterTodo = ({ isTrue, handleDay }) => {
  const [todos, setTodos] = useContext(TodoContext);
  const [done, setDone] = useState('');
  // const [isTrue, setIsTrue] = useState(false);

  let copyTask;

  switch (done) {
    case 'All':
      copyTask = todos;
      break;
    case 'uncompleted':
      copyTask = todos.filter((task) => !task.completed);
      break;
    case 'completed':
      copyTask = todos.filter((task) => task.completed);
      break;
    default:
      copyTask = todos;
      break;
  }

  // const handleDay = () => {
  //   setIsTrue((prev) => !prev);
  // };

  return (
    <StyledDiv isTrue={isTrue}>
      <p onClick={() => setDone('All')} className="all">
        Всего: {todos.length}
      </p>
      <p onClick={() => setDone('uncompleted')} className="uncompleted">
        Невыполненные: {todos.filter((task) => !task.completed).length}
      </p>
      <p onClick={() => setDone('completed')} className="completed">
        Выполненные: {todos.filter((task) => task.completed).length}
      </p>
      <StyledP onClick={handleDay}>
        {!isTrue ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/91/91466.png"
            alt="img"
          />
        ) : (
          <img
            className="night"
            src="https://cdn.icon-icons.com/icons2/3765/PNG/512/sun_day_icon_231269.png"
            alt="img"
          />
        )}
      </StyledP>
    </StyledDiv>
  );
};

export default FilterTodo;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 600px;
  padding: 20px 40px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  margin-bottom: 20px;
  background-color: ${({ isTrue }) => (!isTrue ? 'white' : '#002b64')};
  .all {
    color: #0f55b2;
    color: ${({ isTrue }) => (!isTrue ? '№002b64' : 'white')};
  }
  .uncompleted {
    color: red;
  }
  .completed {
    color: green;
  }
`;

const StyledP = styled.p`
  cursor: pointer;
  img {
    margin-top: 10px;
  }
`;
