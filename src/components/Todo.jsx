import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import styled from 'styled-components';

const Todo = (props) => {
  const [todos, setTodos] = useContext(TodoContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const completeTodo = (e) => {
    const filterTodos = todos.map((item) => {
      if (item.id === e.target.value) {
        item.completed = e.target.checked;
      }
      return item;
    });

    setTodos(filterTodos);
  };

  const deleteTodo = () => {
    const filteredTodo = todos.filter((item) => item.id !== props.id);
    setTodos(filteredTodo);
    closeDeleteModal();
  };

  const openDeleteModal = () => {
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
  };

  const isCompleted = props.completed ? 'checked' : '';

  return (
    <>
      <StyledTodoDiv className="todo-item" isCompleted={isCompleted}>
        <label htmlFor={props.id}>{props.title}</label>
        <div>
          <StyledCheckbox
            id={props.id}
            type="checkbox"
            checked={isCompleted}
            value={props.id}
            onChange={(e) => completeTodo(e)}
          />
          <button
            type="button"
            className="btn-delete"
            id={props.id}
            onClick={openDeleteModal}
          >
            Delete
          </button>
        </div>
      </StyledTodoDiv>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <p>
              Вы уверены, что хотите <br /> удалить эту задачу?
            </p>
            <div>
              {' '}
              <Button onClick={deleteTodo}>Да</Button>
              <Button
                style={{ backgroundColor: '#ff5757' }}
                onClick={closeDeleteModal}
              >
                Отмена
              </Button>
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Todo;

const StyledTodoDiv = styled.div`
  width: 500px;
  padding: 10px;
  background-color: #5386a1;
  border: none;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  color: white;
  button {
    padding: 10px 20px;
    border-radius: 45%;
    background-color: #ff5e5e;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
  }
  label {
    text-decoration: ${({ isCompleted }) =>
      isCompleted === 'checked' ? 'line-through' : 'none'};
  }
`;

const StyledCheckbox = styled.input`
  position: relative;
  top: 5px;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: red;
  cursor: pointer;
  margin-right: 10px;
  &:checked {
    background-color: green;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 40px 60px;
  border-radius: 20px;
  border: 3px solid #598bc7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin-bottom: 30px;
    font-weight: bold;
    color: #1d93d2;
    text-align: center;
    font-size: 18px;
  }
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 25px;
  border: none;
  border-radius: 15px;
  background-color: #00bf63;
  color: white;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #0f55b2;
  }
`;
