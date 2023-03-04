import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootPage from './pages/root/RootPage';
import GenderPage from './pages/gender/GenderPage';
import HomePage from './pages/home/HomePage';
import LikesPage from './pages/likes/LikesPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/gender" element={<GenderPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/likes" element={<LikesPage type="likes" />} />
        <Route path="/dislikes" element={<LikesPage type="dislikes" />} />
        <Route path="/matches" element={<LikesPage type="matches" />} />
      </Routes>
    </Router>
  );
};

export default App;
