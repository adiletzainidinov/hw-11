import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../context/TodoContext';
import { styled } from 'styled-components';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();
    console.log('title: ', title);
    if ('' === title || undefined === title) {
      alert('Поле не может быть пустым');
      return;
    }
    const newTodos = [
      ...todos,
      { id: uuidv4(), title: title, completed: false },
    ];
    setTodos(newTodos);
    setTitle('');
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <StyledInput>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter new todo..."
        />
        <button type="button" onClick={addTodo}>
          ADD
        </button>
      </StyledInput>
    </>
  );
};

export default AddTodo;

const StyledInput = styled.div`
  input {
    padding: 10px;
    width: 300px;
    border: 3px solid #2b69ba;
    outline: none;
  }
  button {
    padding: 10px 20px;
    border-radius: 50px;
    background-color: #e2316c;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 19px;
    margin-left: 20px;
  }
`;
