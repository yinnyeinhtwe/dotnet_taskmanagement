import { useState, useEffect } from 'react';
import { getAllTasks } from '../api/taskService';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await getAllTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Task Manager</h2>
        <p className="text-sm text-gray-500">.NET API + React Router + Tailwind CSS</p>
      </header>
      
      <TaskForm onTaskCreated={handleTaskCreated} />

      <hr className="my-6 border-gray-200" />

      <h3 className="text-lg font-semibold text-gray-800 mb-4">Task List</h3>
      {loading ? (
        <p className="text-sm text-gray-500 animate-pulse">Loading tasks...</p>
      ) : (
        <TaskList tasks={tasks} />
      )}
    </div>
  );
}