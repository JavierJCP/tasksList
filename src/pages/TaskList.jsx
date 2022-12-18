import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Task from '../components/Task';
import TaskContext from '../context/TaskContext';

function TaskList() {
  const { tasks, loadTasks } = useContext(TaskContext);

  useEffect(() => {
    const loadData = localStorage.getItem('tasksList');
    if (loadData) {
      loadTasks(JSON.parse(loadData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasksList', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Navbar />
      <div className="list_container">
        {!tasks ? (
          <h2>no tasks yet</h2>
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              edit={task.edit}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
