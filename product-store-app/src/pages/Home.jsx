import ProductList from '../components/ProductList';
import SettingsPanel from '../components/SettingsPanel';
import { useSettings, useSettingsDispatch } from '../context/SettingsContext';

const Home = () => {
  const { search, sortBy } = useSettings();
  const dispatch = useSettingsDispatch();

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Discover Your <span>Style</span></h1>
        <p>Clothing, jewellery, electronics & more — all in one place</p>
      </div>

      <div className="search-sort-bar">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => dispatch({ type: 'SET_SEARCH', payload: e.target.value })}
          className="search-input"
        />
        <select
          value={sortBy}
          onChange={(e) => dispatch({ type: 'SET_SORT', payload: e.target.value })}
          className="sort-select"
        >
          <option value="default">Sort: Default</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      <SettingsPanel />
      <ProductList />
    </div>
  );
};

export default Home;