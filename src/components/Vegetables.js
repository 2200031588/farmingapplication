import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import tomatoesImage from '../images/tomatoes.jpeg';
import potatoesImage from '../images/potatoes.jpeg';
import carrotsImage from '../images/carrots.jpeg';
import chiliImage from '../images/chili.jpeg';
import capsicumImage from '../images/capsicum.jpeg';
import spinachImage from '../images/spinach.jpeg';
import radishImage from '../images/radish.jpeg';

const Vegetables = () => {
    const [quantities, setQuantities] = useState({});
    const navigate = useNavigate();

    const updateQuantity = (event, productName) => {
        const newQuantity = event.target.value;
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productName]: newQuantity,
        }));
    };

    const handleBuyNow = (product) => {
        const selectedQuantity = quantities[product.name] || 1;
        const totalPrice = (product.price * selectedQuantity).toFixed(2);

        navigate(
            `/orderconfirmation?product=${product.name}&quantity=${selectedQuantity}&totalPrice=${totalPrice}`
        );
    };

    return (
        <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f7f4f1", margin: 0, padding: 0, boxSizing: "border-box" }}>
            <nav style={{ backgroundColor: "#406343", display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
                <div style={{ display: "flex", gap: "15px" }}>
                    <a href="/customerhome" style={{ color: "white", padding: "16px 22px", textDecoration: "none", fontWeight: "bold" }}>Home</a>
                    <a href="/contact" style={{ color: "white", padding: "16px 22px", textDecoration: "none", fontWeight: "bold" }}>Contact Us</a>
                </div>
            </nav>

            <section
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                    margin: "3rem auto",
                    maxWidth: "1200px",
                }}
            >
                {[
                    {
                        name: 'Tomatoes', price: 2.50, image: tomatoesImage, description: 'Fresh organic tomatoes picked daily.'
                    },
                    {
                        name: 'Potatoes', price: 1.80, image: potatoesImage, description: 'Locally grown potatoes, perfect for every dish.'
                    },
                    {
                        name: 'Carrots', price: 2.00, image: carrotsImage, description: 'Crisp carrots, great for snacking and cooking.'
                    },
                    {
                        name: 'Chili', price: 3.00, image: chiliImage, description: 'Spicy and fresh chilies to add heat to your dishes.'
                    },
                    {
                        name: 'Capsicum', price: 2.50, image: capsicumImage, description: 'Crunchy capsicum, perfect for salads and stir-fries.'
                    },
                    {
                        name: 'Spinach', price: 2.20, image: spinachImage, description: 'Nutritious spinach, great for salads and cooking.'
                    },
                    {
                        name: 'Radish', price: 1.50, image: radishImage, description: 'Fresh radishes for a crunchy snack.'
                    }
                ].map((product, index) => (
                    <div key={index} style={{ backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)", padding: "25px", textAlign: "center" }}>
                        <h3 style={{ color: "#406343" }}>{product.name}</h3>
                        <img src={product.image} alt={product.name} style={{ maxWidth: "100%", height: "auto" }} />
                        <p>{product.description}</p>
                        <div className="price" style={{ fontSize: "1.2rem", color: "#406343", margin: "10px 0" }}>Rs.{product.price} per kg</div>
                        <input
                            type="number"
                            className="quantity"
                            min="1"
                            value={quantities[product.name] || ''}
                            onChange={(e) => updateQuantity(e, product.name)}
                            placeholder="Enter kg"
                            style={{ margin: "10px 0" }}
                        />
                        <button
                            onClick={() => handleBuyNow(product)}
                            className="buy-button"
                            style={{
                                backgroundColor: "#5b8a72",
                                color: "white",
                                border: "none",
                                padding: "10px 15px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                textDecoration: "none",
                                transition: "background-color 0.3s",
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                ))}
            </section>

            <footer style={{ backgroundColor: "#5b8a72", color: "white", textAlign: "center", padding: "1.5rem 0", marginTop: "3rem", fontSize: "1rem" }}>
                <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Vegetables;
