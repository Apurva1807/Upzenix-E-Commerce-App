import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // get unique categories
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // search
  let filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // filter by category
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === category
    );
  }

  // sort by price
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={inputStyle}
        />

        {/* Sort & Filter */}
        <div style={controlStyle}>
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>

          <select onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Products */}
        <div style={gridStyle}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
};

const controlStyle = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

export default Home;