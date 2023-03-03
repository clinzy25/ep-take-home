import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/HomePage';
import PokeTinderHome from './pages/gender/GenderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gender" element={<PokeTinderHome />} />
      </Routes>
    </Router>
  );
}

export default App;
