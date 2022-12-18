import React, { useContext, useState } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import TaskContext from '../context/TaskContext';
import '../styles/Task.css';

function Task({ id, text, done, edit }) {
  const [input, setInput] = useState('');
  const { changeDone, changeEdit, editTask, deleteTask } =
    useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();
    editTask(id, input);
  }

  if (!edit) {
    return (
      <div className={done ? 'task_container done' : 'task_container'}>
        <h1 className="task_text">{text}</h1>
        <div className="task_icons">
          <input
            type="checkbox"
            checked={done}
            readOnly
            onClick={() => changeDone(id)}
          />
          <FaPen onClick={() => changeEdit(id)} />
          <FaTrashAlt onClick={() => deleteTask(id)} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={done ? 'task_container done' : 'task_container'}>
        <h1 className="task_text">{text}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="edit task"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Edit</button>
        </form>
      </div>
    );
  }
}

export default Task;
