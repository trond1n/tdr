import React from 'react'
import styles from './TodoForm.module.css'
const TodoForm = () => {
  return (
    <div className={styles.container}>
    <input type="text" className={styles.input} placeholder="Enter a task" />
    <button className={styles.button}>Добавить задачу</button>
  </div>
  )
}
export default TodoForm