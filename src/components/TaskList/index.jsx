import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './TaskList.module.css';

const TaskList = ({tasks, setTasks}) => {
 

  const moveTask = (dragIndex, hoverIndex) => {
    const draggedTask = tasks[dragIndex];
    const updatedTasks = [...tasks];
    updatedTasks.splice(dragIndex, 1);
    updatedTasks.splice(hoverIndex, 0, draggedTask);
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const Task = ({ task, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'task',
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: 'task',
      hover: (item) => {
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
          return;
        }
        moveTask(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

    const opacity = isDragging ? 0.5 : 1;

    const handleDelete = () => {
      deleteTask(task.id);
    };

    return (
      <div ref={node => drag(drop(node))} style={{ opacity }} className={styles.task}>
        <div className={styles.taskText}>
          {task.emoji} {task.text}
        </div>
        <div className={styles.buttons}>
          <button className={styles.editButton}>✏️</button>
          <button className={styles.deleteButton} onClick={handleDelete}>🗑️</button>
        </div>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.taskList}>
        {tasks.map((task, index) => (
          <Task key={task.id} task={task} index={index} />
        ))}
      </div>
    </DndProvider>
  );
};

export default TaskList;
