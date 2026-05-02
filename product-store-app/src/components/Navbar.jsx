import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSettings, useSettingsDispatch } from '../context/SettingsContext';

const Navbar = () => {
  const { totalItems } = useSelector(state => state.cart);
  const { theme, view, category } = useSettings();
  const dispatch = useSettingsDispatch();

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-container">
        <Link to="/" className="logo">Store</Link>
        
        <div className="nav-center">
          <button 
            onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
            className="theme-toggle"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <div className="view-toggle">
            <button 
              className={view === 'grid' ? 'active' : ''}
              onClick={() => dispatch({ type: 'SET_VIEW', payload: 'grid' })}
            >
              Grid
            </button>
            <button 
              className={view === 'list' ? 'active' : ''}
              onClick={() => dispatch({ type: 'SET_VIEW', payload: 'list' })}
            >
              List
            </button>
          </div>
        </div>

        <Link to="/cart" className="cart-link">
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;