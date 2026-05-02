import { 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity 
} from '../store/cartSlice';

const CartItem = ({ item, dispatch }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      </div>
      <button 
        onClick={() => dispatch(removeFromCart(item.id))} 
        className="remove-item"
      >
        Remove
      </button>
      <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;