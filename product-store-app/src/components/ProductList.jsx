import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { useSettings } from '../context/SettingsContext';

const fetchProducts = async (category) => {
  const url = category === 'all'
    ? 'https://dummyjson.com/products?limit=50'
    : `https://dummyjson.com/products/category/${category}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch products');
  const data = await response.json();
  return data.products;
};

const ProductList = () => {
  const { view, category, search, sortBy } = useSettings();

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products', category],
    queryFn: () => fetchProducts(category),
  });

  if (isLoading) return (
    <div className="loading">
      <div className="loading-spinner"></div>
      Loading products...
    </div>
  );

  if (error) return (
    <div className="error">Something went wrong: {error.message}</div>
  );

  let filtered = products || [];

  if (search.trim()) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sortBy === 'low-high') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-low') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  if (filtered.length === 0) return (
    <div className="no-results">
      No products found for "<strong>{search}</strong>"
    </div>
  );

  return (
    <div className={`products-container ${view}`}>
      {filtered.map(product => (
        <ProductCard key={product.id} product={product} view={view} />
      ))}
    </div>
  );
};

export default ProductList;