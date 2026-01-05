import useCartStore from "../store/cartStore";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCartStore();

  return (
    <div>
      <h2>My Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <input
            type="number"
            value={item.qty}
            min="1"
            onChange={e => updateQty(item.id, Number(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;