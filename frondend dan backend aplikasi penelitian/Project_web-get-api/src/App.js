import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Penelitian from './pages/Penelitian';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="penelitian" element={<Penelitian />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
