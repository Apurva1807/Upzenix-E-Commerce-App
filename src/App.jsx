import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import useThemeStore from "./store/themeStore";

function App() {
  const dark = useThemeStore((state) => state.dark);

  return (
    <div
      style={{
        backgroundColor: dark ? "#121212" : "#ffffff",
        color: dark ? "#ffffff" : "#000000",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;