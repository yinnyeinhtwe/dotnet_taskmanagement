import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TasksPage from './pages/TasksPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Default လိပ်စာဝင်လာလျှင် TasksPage သို့ ပို့မည် */}
          <Route path="/" element={<TasksPage />} />
          
          {/* <Route path="/about" element={<AboutPage />} /> */}

          {/* navigate to the default page if no matching route is found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}