import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';

const ProductCard = ({ product, view }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`product-card ${view}`}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="product-image-wrap">
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <p className="product-category-tag">{product.category}</p>
        <h3>{product.title}</h3>
        <div className="price-row">
          <span className="price">${product.price}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.thumbnail,
              }));
            }}
            className="add-to-cart"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;