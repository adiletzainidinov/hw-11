import { useContext } from 'react';
import Todo from './Todo';
import { TodoContext } from '../context/TodoContext';
const TodoList = () => {
  const [todos] = useContext(TodoContext);
  return 1 <= todos.length ? (
    todos.map((item) => {
      return (
        <Todo
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
        />
      );
    })
  ) : (
    <h4 style={{ marginTop: '20px',marginRight: '100px', fontSize: '18px' }}>Нет задачи,пожалуйста добавьте</h4>
  );
};

export default TodoList;
