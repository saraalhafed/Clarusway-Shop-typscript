import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorite from './pages/Favorites';
import { useSelector } from 'react-redux';
import { RootStateType } from './store/store';

const App = () => {
  const { darkMode } = useSelector((state: RootStateType) => state.ui);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="app">
        <Navbar title="Clarus Shop" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
