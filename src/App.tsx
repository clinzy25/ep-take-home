import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootPage from './pages/root/RootPage';
import GenderPage from './pages/gender/GenderPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/gender" element={<GenderPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
