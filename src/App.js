import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TodoForm from './components/TodoForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 'task1', text: 'Покормить кота', emoji: '🐱' },
    { id: 'task2', text: 'Приготовить обед', emoji: '🍳' },
    { id: 'task3', text: 'Погулять в парке', emoji: '🌳' },
  ]);

  const handleAddTask = (newTask) => {
    const newTaskObj = {
      id: `task${Date.now()}`,
      text: newTask,
      emoji: '📝',
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
  };

  return (
    <div className="App">
      <Header/>
      <TodoForm addTask={handleAddTask}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
