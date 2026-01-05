import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCartStore from "../store/cartStore";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <img
          src={product.image}
          alt={product.title}
          style={imageStyle}
        />

        <div>
          <h2>{product.title}</h2>
          <p style={{ margin: "10px 0" }}>{product.description}</p>
          <h3>₹ {product.price}</h3>

          <button style={buttonStyle} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const pageStyle = {
  padding: "20px",
};

const cardStyle = {
  maxWidth: "900px",
  margin: "auto",
  display: "flex",
  gap: "30px",
  alignItems: "center",
  border: "1px solid #ddd",
  padding: "20px",
};

const imageStyle = {
  height: "250px",
  objectFit: "contain",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "8px 12px",
  cursor: "pointer",
};

export default ProductDetails;