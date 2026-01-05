const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div style={pageStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Checkout</h2>

        <input
          type="text"
          placeholder="Name"
          required
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          required
          style={inputStyle}
        />

        <textarea
          placeholder="Address"
          required
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Place Order
        </button>
      </form>
    </div>
  );
};

const pageStyle = {
  padding: "20px",
  display: "flex",
  justifyContent: "center",
};

const formStyle = {
  maxWidth: "400px",
  margin: "auto",
  border: "1px solid #ddd",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const inputStyle = {
  padding: "8px",
  fontSize: "14px",
};

const buttonStyle = {
  padding: "10px",
  cursor: "pointer",
};

export default Checkout;