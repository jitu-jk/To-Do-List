import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../features/tasks/taskslice';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa'; 

const Tasklist = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: editId, text: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editId === task.id ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button type="submit">
                <FaCheck />
              </button>
            </form>
          ) : (
            <>
              <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => dispatch(toggleTask(task.id))}
              >
                {task.text}
              </span>
              <FaEdit
                onClick={() => handleEdit(task)}
                style={{ cursor: 'pointer', marginLeft: '10px', color: 'yellow' }}
              /> 
              <FaTrash
                onClick={() => dispatch(deleteTask(task.id))}
                style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}
              />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Tasklist;
