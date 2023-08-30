import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { NavbarComp } from './components/NavbarComp';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  );
}

export default App;
