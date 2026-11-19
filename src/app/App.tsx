import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Navigation from './components/Navigation';
import Wave from './pages/Wave';
import ProjectPage from './pages/ProjectPage';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />

        <Routes>
          <Route path="/" element={<Wave />} />
          <Route path="/design/:projectId" element={<ProjectPage />} />
          <Route path="/archive/:projectId" element={<ProjectPage />} />
          <Route path="/photo" element={<Navigate to="/" replace />} />
          <Route path="/motion/:projectId" element={<ProjectPage />} />
          <Route path="/art" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
