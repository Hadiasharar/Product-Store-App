import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { useSettings } from './context/SettingsContext';
import './index.css';

function App() {
  const { theme } = useSettings();

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;