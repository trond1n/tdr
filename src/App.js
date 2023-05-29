import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoForm/>
      <TaskList/>
    </div>
  );
}

export default App;
