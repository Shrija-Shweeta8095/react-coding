import React, { useEffect, useState } from "react";
import "./MainPage.scss";

function MainPage() {
  const [products, setProducts] = useState([]);

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="main-page">
      <h2 className="main-page__heading">Ecommerce website</h2>

      <header className="header">
        <h2 className="logo">ShopMate</h2>

        <input
          className="search-bar"
          type="text"
          placeholder="Search for products..."
          width={100}
        />
        <button className="cart-btn">Cart</button>
      </header>

      {/* Hero Banner */}
      <section className="hero">
        <h2>Welcome to Shopmate</h2>
        <p>Best deals, every day!</p>
      </section>

      {/* Product Listing */}
      <section className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </section>

      {/* footer  */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} ShopMate. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;
