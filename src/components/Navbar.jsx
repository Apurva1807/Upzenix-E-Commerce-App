import { Link } from "react-router-dom";
import useThemeStore from "../store/themeStore";

const Navbar = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const dark = useThemeStore((state) => state.dark);

  return (
    <nav style={navStyle}>
      <h3>ShopEasy</h3>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/cart" style={linkStyle}>Cart</Link>
        <button onClick={toggleTheme} style={buttonStyle}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  backgroundColor: "#ddd",
};

const linkStyle = {
  marginRight: "10px",
  textDecoration: "none",
};

const buttonStyle = {
  padding: "5px 8px",
  cursor: "pointer",
};

export default Navbar;