import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div style={cardStyle}>
      <img
        src={product.image}
        alt={product.title}
        style={imageStyle}
      />

      <h4 style={{ margin: "10px 0" }}>
        {product.title.length > 40
          ? product.title.slice(0, 40) + "..."
          : product.title}
      </h4>

      <p style={{ fontWeight: "bold" }}>₹ {product.price}</p>

      <button style={buttonStyle} onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <br />
      <Link to={`/product/${product.id}`} style={viewStyle}>
        View
      </Link>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  textAlign: "center",
  borderRadius: "4px",
};

const imageStyle = {
  height: "120px",
  objectFit: "contain",
  marginBottom: "10px",
};

const buttonStyle = {
  padding: "6px 10px",
  marginTop: "10px",
  cursor: "pointer",
};

const viewStyle = {
  display: "inline-block",
  marginTop: "8px",
  color: "blue",
  textDecoration: "none",
};

export default ProductCard;