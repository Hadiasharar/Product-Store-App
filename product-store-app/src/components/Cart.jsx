import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../store/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
  const { items, totalItems, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [ordered, setOrdered] = useState(false);

  const handleCheckout = () => {
    setOrdered(true);
    setTimeout(() => {
      dispatch(clearCart());
      setOrdered(false);
    }, 3000);
  };

  if (ordered) return (
    <div className="cart-page">
      <div className="order-success">
        <div className="success-icon">🎉</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase. Your items are on their way!</p>
        <Link to="/" className="continue-shopping">Continue Shopping</Link>
      </div>
    </div>
  );

  if (items.length === 0) return (
    <div className="cart-page">
      <div className="empty-cart">
        <p>🛍️ Your cart is empty</p>
        <Link to="/">Browse Products</Link>
      </div>
    </div>
  );

  return (
    <div className="cart-page">
      <h1 className="cart-page-header">Shopping Cart</h1>
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Items ({totalItems})</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="cart-actions">
          <button onClick={() => dispatch(clearCart())} className="clear-cart">
            Clear Cart
          </button>
          <button onClick={handleCheckout} className="checkout-btn">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;