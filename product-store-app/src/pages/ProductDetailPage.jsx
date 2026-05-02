import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const fetchProduct = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) throw new Error('Product not found');
  return response.json();
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  });

  if (isLoading) return (
    <div className="loading">
      <div className="loading-spinner"></div>
      Loading product...
    </div>
  );

  if (error) return (
    <div className="detail-page">
      <div className="error">Product not found.</div>
    </div>
  );

  const mainImage = selectedImage || product.thumbnail;

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-container">
        <div className="detail-image-wrap">
          <img
            src={mainImage}
            alt={product.title}
            className="detail-image"
          />
          <div className="detail-thumbnails">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`view ${i + 1}`}
                className={`thumb ${mainImage === img ? 'thumb-active' : ''}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="detail-info">
          <p className="product-category-tag">{product.category}</p>
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-brand">by {product.brand}</p>

          <div className="detail-rating">
            {'★'.repeat(Math.round(product.rating))}
            {'☆'.repeat(5 - Math.round(product.rating))}
            <span>{product.rating} / 5</span>
          </div>

          <p className="detail-price">${product.price}</p>

          {product.discountPercentage > 0 && (
            <p className="detail-discount">
              🏷️ {product.discountPercentage.toFixed(0)}% off
            </p>
          )}

          <p className="detail-description">{product.description}</p>

          <div className="detail-meta">
            <span className={`stock-badge ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}>
              {product.stock > 0 ? `✓ In Stock (${product.stock})` : '✗ Out of Stock'}
            </span>
          </div>

          <button
            className="detail-add-btn"
            onClick={() => dispatch(addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.thumbnail,
            }))}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;