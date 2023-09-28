import React, { useState } from 'react';
import './App.css';


function Task({ task, onTaskUpdate, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleUpdateClick = () => {
    onTaskUpdate(task.id, updatedTitle);
    setIsEditing(false);
  };

  return (
    <li>
      <div>
        {isEditing ? (
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        ) : (
          <span>{task.title}</span>
        )}
      </div>
      <div>
        {isEditing ? (
          <button onClick={handleUpdateClick}>Guardar Tarea</button>
        ) : (
          <>
       <button
  onClick={() => setIsEditing(true)}
  className="edit-button"
>
  Editar
</button>
<button
  onClick={() => onDeleteTask(task.id)}
  className="delete-button"
>
  Eliminar
</button>

          </>
        )}
      </div>
    </li>
  );
}

export default Task;
