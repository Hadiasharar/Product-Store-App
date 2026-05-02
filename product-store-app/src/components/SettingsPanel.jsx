import { useSettings, useSettingsDispatch } from '../context/SettingsContext';

const categories = [
  { id: 'all', label: '✨ All' },
  { id: 'womens-dresses', label: '👗 Dresses' },
  { id: 'mens-shirts', label: '👔 Men Shirts' },
  { id: 'womens-shoes', label: '👠 Women Shoes' },
  { id: 'mens-shoes', label: '👟 Men Shoes' },
  { id: 'womens-jewellery', label: '💍 Jewellery' },
  { id: 'smartphones', label: '📱 Phones' },
  { id: 'laptops', label: '💻 Laptops' },
];

const SettingsPanel = () => {
  const { category } = useSettings();
  const dispatch = useSettingsDispatch();

  return (
    <div className="category-tabs">
      {categories.map(cat => (
        <button
          key={cat.id}
          className={`category-tab ${category === cat.id ? 'active' : ''}`}
          onClick={() => dispatch({ type: 'SET_CATEGORY', payload: cat.id })}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default SettingsPanel;