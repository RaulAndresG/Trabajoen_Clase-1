import React, { useState } from 'react';
import './App.css';


function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    onAddTask(title);
    setTitle('');
  };

  return (
    <div>
      <h2>Agregar Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese la nueva tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
 <button type="submit" className="add-button">
  Agregar
</button>

      </form>
    </div>
  );
}

export default TaskForm;
