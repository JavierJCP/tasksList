import React, { useReducer } from 'react';
import TaskContext from './TaskContext';

function TaskState({ children }) {
  const initialState = {
    tasks: [],
  };
  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [action.payload, ...state.tasks] };
      case 'DONE':
        return { ...state, tasks: [...action.payload] };
      case 'EDIT':
        return { ...state, tasks: [...action.payload] };
      case 'EDIT_TASK':
        return { ...state, tasks: [...action.payload] };
      case 'DELETE':
        return { ...state, tasks: [...action.payload] };
      case 'LOAD':
        return { ...state, tasks: [...action.payload] };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function addTask(task) {
    dispatch({
      type: 'ADD_TASK',
      payload: task,
    });
  }

  function changeDone(id) {
    const temp = state.tasks;
    const item = temp.find((task) => task.id === id);
    item.done = !item.done;
    dispatch({
      type: 'DONE',
      payload: temp,
    });
  }

  function changeEdit(id) {
    const temp = state.tasks;
    const item = temp.find((task) => task.id === id);
    item.edit = !item.edit;
    dispatch({
      type: 'EDIT',
      payload: temp,
    });
  }

  function editTask(id, newText) {
    const temp = state.tasks;
    const item = temp.find((task) => task.id === id);
    item.text = newText;
    item.edit = false;
    dispatch({
      type: 'EDIT_TASK',
      payload: temp,
    });
  }

  function deleteTask(id) {
    const temp = state.tasks.filter((task) => task.id !== id);
    dispatch({
      type: 'DELETE',
      payload: temp,
    });
  }

  function loadTasks(tasks) {
    dispatch({
      type: 'LOAD',
      payload: tasks,
    });
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        changeDone,
        changeEdit,
        editTask,
        deleteTask,
        loadTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskState;
