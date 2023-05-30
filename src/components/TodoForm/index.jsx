import React, { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === '') {
      return;
    }
    addTask(newTask.trim());
    setNewTask('');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleFormSubmit}>
      <input
        className={styles.todoInput}
        type="text"
        value={newTask}
        onChange={handleInputChange}
      />
      <button className={styles.addButton} type="submit">
        Добавить задачу
      </button>
    </form>
  );
};

export default TodoForm;
