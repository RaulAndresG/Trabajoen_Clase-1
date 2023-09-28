import React from 'react';
import Task from './Task';
import './App.css';


function TaskList({ tasks, onTaskUpdate, onDeleteTask }) {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onTaskUpdate={onTaskUpdate}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
