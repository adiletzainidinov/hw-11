import './App.css';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
	return (
		<TodoProvider>
			<div className="container">
				<h1 className='app-title'>Todo Application</h1>
				<AddTodo />
				<TodoList />
			</div>
		</TodoProvider>
	);
}

export default App;
