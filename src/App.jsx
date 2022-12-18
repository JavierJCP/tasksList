import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskState from './context/TaskState';
import TaskForm from './pages/TaskForm';
import TaskList from './pages/TaskList';
function App() {
  return (
    <div className="container">
      <TaskState>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create" element={<TaskForm />} />
        </Routes>
      </TaskState>
    </div>
  );
}

export default App;
