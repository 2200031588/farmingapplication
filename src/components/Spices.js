import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For handling navigation

// Import images
import turmericImage from '../images/turmeric.jpeg';
import cuminImage from '../images/cumin.jpeg';
import corianderImage from '../images/coriander.jpeg';
import cardamomImage from '../images/cardamom.jpeg';
import cinnamonImage from '../images/cinnamon.jpeg';

const Spices = () => {
    const [quantity, setQuantity] = useState({});
    const navigate = useNavigate(); // Initialize navigate function

    const updateQuantity = (event, product) => {
        const newQuantity = event.target.value;
        setQuantity({ ...quantity, [product]: newQuantity });
    };

    const handleBuyNow = (product, price) => {
        const selectedQuantity = quantity[product] || 1; // Default to 1 if no quantity entered
        const totalPrice = price * selectedQuantity;

        // Redirect to the confirmation page with product, quantity, and total price
        navigate(`/orderconfirmation?product=${product}&quantity=${selectedQuantity}&totalPrice=${totalPrice.toFixed(2)}`);
    };

    return (
        <div>
            <style>
                {`
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        background-color: #f7f4f1;
                        color: white;
                    }

                    nav {
                        background-color: #006400; /* Dairy page vibrant green */
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px 20px;
                    }

                    .nav-links {
                        display: flex;
                        gap: 15px;
                    }

                    .nav-links a {
                        color: white;
                        text-align: center;
                        padding: 16px 22px;
                        text-decoration: none;
                        font-weight: bold;
                    }

                    .nav-links a:hover {
                        background-color: #004d00;
                        color: #f2f2f2;
                    }

                    .product-section {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-around;
                        margin: 3rem auto;
                        max-width: 1200px;
                    }

                    .product-item {
                        background-color: #fff;
                        border-radius: 12px;
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                        padding: 25px;
                        width: 30%;
                        margin-bottom: 20px;
                        text-align: center;
                    }

                    .product-item h3 {
                        color: #a0522d;
                    }

                    .product-item img {
                        max-width: 100%;
                        height: auto;
                    }

                    .price {
                        font-size: 1.2rem;
                        color: #a0522d;
                        margin: 10px 0;
                    }

                    .quantity {
                        margin: 10px 0;
                    }

                    .buy-button {
                        background-color: #cd853f;
                        color: white;
                        border: none;
                        padding: 10px 15px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-weight: bold;
                        text-decoration: none;
                        transition: background-color 0.3s;
                    }

                    .buy-button:hover {
                        background-color: #a0522d;
                    }

                    footer {
                        background-color: #006400; /* Dairy page vibrant green */
                        color: white;
                        text-align: center;
                        padding: 1.5rem 0;
                        margin-top: 3rem;
                        font-size: 1rem;
                    }
                `}
            </style>

            <nav>
                <div className="nav-links">
                    <a href="/customerhome">Home</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </nav>

            <section className="product-section">
                {[
                    { name: 'Turmeric', price: 2.50, image: turmericImage },
                    { name: 'Cumin', price: 4.00, image: cuminImage },
                    { name: 'Coriander', price: 2.80, image: corianderImage },
                    { name: 'Cardamom', price: 5.00, image: cardamomImage },
                    { name: 'Cinnamon', price: 3.75, image: cinnamonImage },
                ].map((product, index) => (
                    <div className="product-item" key={index}>
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} />
                        <p>{`${product.name} from organic spice farms`}</p>
                        <div className="price">{`$${product.price} per kg`}</div>
                        <input
                            type="number"
                            className="quantity"
                            min="1"
                            value={quantity[product.name] || ''}
                            onChange={(e) => updateQuantity(e, product.name)}
                            placeholder="Enter kg"
                        />
                        <button
                            className="buy-button"
                            onClick={() => handleBuyNow(product.name, product.price)}
                        >
                            Buy Now
                        </button>
                    </div>
                ))}
            </section>

            <footer>
                <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Spices;
