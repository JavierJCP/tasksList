import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TaskContext from '../context/TaskContext';

function TaskForm() {
  const [input, setInput] = useState('');
  const { tasks, addTask } = useContext(TaskContext);

  useEffect(() => {
    localStorage.setItem('tasksList', JSON.stringify(tasks));
  }, [tasks]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      text: input,
      done: false,
      edit: false,
    };
    addTask(newTask);
    setInput('');
  }

  return (
    <div>
      <Navbar />
      <div className="form_container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input_form"
            type="text"
            value={input}
            placeholder="new task"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn_form">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
