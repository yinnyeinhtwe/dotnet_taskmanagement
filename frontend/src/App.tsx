import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TaskPage from './pages/TaskPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}