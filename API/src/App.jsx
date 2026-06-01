import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();

        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <h2>Loading Products...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h2>{error}</h2>
      </div>
    );
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Data Fetched from Fake API Store</h1>
      <input
        type="text"
        id="searchbar"
        placeholder="Search Product..."
        value={search}
        ref={(input) => input && input.focus()}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product" key={product.id}>
              <h3>{product.title}</h3>

              <img
                src={product.image}
                alt={product.title}
                width="150"
              />

              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default App;