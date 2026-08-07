import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import milkImage from '../images/milk.jpeg';
import cheeseImage from '../images/cheese.jpeg';
import yogurtImage from '../images/yogurt.jpeg';
import creamImage from '../images/cream.jpeg';
import butterImage from '../images/butter.jpeg';
import iceCreamImage from '../images/icecream.jpeg';

const Dairy = () => {
    const [quantity, setQuantity] = useState({});
    const navigate = useNavigate();

    const updateQuantity = (event, product) => {
        const newQuantity = event.target.value;
        setQuantity({ ...quantity, [product]: newQuantity });
    };

    const handleBuyNow = (product, price) => {
        const selectedQuantity = quantity[product] || 1;
        const totalPrice = price * selectedQuantity;

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
                        background-color: #406343;
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
                        background-color: #2f4f33;
                        color: #f2f2f2;
                    }

                    .product-section {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr); /* Ensures 3 items per row */
                        gap: 20px; /* Space between cards */
                        margin: 3rem auto;
                        max-width: 1200px;
                    }

                    .product-item {
                        background-color: #fff;
                        border-radius: 12px;
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                        padding: 25px;
                        text-align: center;
                    }

                    .product-item h3 {
                        color: #406343;
                    }

                    .product-item img {
                        max-width: 100%;
                        height: auto;
                        border-radius: 8px;
                    }

                    .price {
                        font-size: 1.2rem;
                        color: #406343;
                        margin: 10px 0;
                    }

                    .quantity {
                        margin: 10px 0;
                        width: 50%;
                    }

                    .buy-button {
                        background-color: #5b8a72;
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
                        background-color: #406343;
                    }

                    footer {
                        background-color: #5b8a72;
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
                    { name: 'Milk', price: 1.20, image: milkImage },
                    { name: 'Cheese', price: 3.50, image: cheeseImage },
                    { name: 'Yogurt', price: 2.00, image: yogurtImage },
                    { name: 'Cream', price: 3.00, image: creamImage },
                    { name: 'Butter', price: 4.00, image: butterImage },
                    { name: 'Ice Cream', price: 5.00, image: iceCreamImage }
                ].map((product, index) => (
                    <div className="product-item" key={index}>
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} />
                        <p>{`${product.name} from local dairy farms`}</p>
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

export default Dairy;
