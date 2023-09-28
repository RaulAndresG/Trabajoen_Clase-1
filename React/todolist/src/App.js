import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Creada', status: 'Creada' },
    { id: 2, title: 'En Pausa', status: 'En Pausa' },
    { id: 3, title: 'En Curso', status: 'En Curso' },
    { id: 4, title: 'Terminada', status: 'Terminada' },
  ]);

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      status: 'Creada',
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskId, updatedTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: updatedTitle } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Aplicación de Gestión de Tareas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
