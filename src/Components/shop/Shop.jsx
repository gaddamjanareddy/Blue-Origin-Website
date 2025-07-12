import React, { useEffect, useState } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { shopData } from './shopData';
import './shop.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = shopData.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(shopData.length / productsPerPage);


  const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } }
  ]
};

useEffect(() => {
  AOS.init({
    duration: 3000,  
    once: true        
  });
},[])



  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="shop-container">
      {/* Header */}
      <header className="shop-header">
        <div className="header-content">
          <NavLink className="logo-section" to="/">
            <h1 className="logo">Blue Origin</h1>
            <span className="logo-subtitle">SHOP</span>
          </NavLink>

          <div className="header-actions">
            <button 
              className="cart-button"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <span className="cart-badge">{getTotalItems()}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <h2 className="hero-title">Explore the Universe</h2>
          <p className="hero-subtitle">Premium space merchandise and collectibles</p>
        <a href="#products-section"><button className="hero-cta">Shop Collection</button></a>
        </div>
        <div className="hero-background"></div>
      </section>
      
      {/* carousel-section */}
      <section className="carousel-section">
        <h2 className="section-title">New Arrivals</h2>
        <Slider {...carouselSettings}>
          {shopData.map(product => (
            <div key={product.id} className="carousel-slide">
              <div className="carousel-card">
                <img src={product.image} alt={product.name} className="carousel-img" />
                <h3>{product.name}</h3>
                <p className="carousel-description">{product.description}</p>
                <p className="carousel-price">${product.price}</p>
                <button className="carousel-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Products */}
      <section className="products-section" id='products-section'>
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {currentProducts.map(product => (
                <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">${product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pagination */}
          <section className="pagination-section">
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i + 1} 
                  className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
                </button>
              ))}
            </div>
          </section>
      

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'cart-open' : ''}`}>
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
        <div className="cart-content">
          <div className="cart-header">
            <h3>Shopping Cart</h3>
            <button 
              className="close-cart"
              onClick={() => setIsCartOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">
                <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
