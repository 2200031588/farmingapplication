import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const OrderConfirmation = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const product = queryParams.get('product');
    const quantity = queryParams.get('quantity');
    const totalPrice = queryParams.get('totalPrice');

    return (
        <div>
            <style>
                {`
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background-color: #406343;
                        color: white;
                        margin: 0;
                        padding: 0;
                    }

                    h1 {
                        text-align: center;
                        margin-top: 50px;
                        color: white;
                    }

                    .order-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 80vh;
                    }

                    .order-details-box {
                        background-color: white;
                        border-radius: 12px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                        padding: 30px;
                        width: 80%;
                        max-width: 600px;
                        text-align: center;
                        margin-top: -60px;
                    }

                    .order-details p {
                        font-size: 1.2rem;
                        margin: 15px 0;
                        color: #555;
                    }

                    .order-details strong {
                        font-weight: bold;
                        color: #406343;
                    }

                    .button-container {
                        margin-top: 30px;
                    }

                    .payment-button {
                        padding: 10px 20px;
                        background-color: #406343;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        font-size: 1rem;
                        cursor: pointer;
                        text-decoration: none;
                    }

                    .payment-button:hover {
                        background-color: #5c7b64;
                    }
                `}
            </style>
            
            <h1>Order Confirmation</h1>
            <div className="order-container">
                <div className="order-details-box">
                    <div className="order-details">
                        <p><strong>Product:</strong> {product}</p>
                        <p><strong>Quantity:</strong> {quantity} kg</p>
                        <p><strong>Total Price:</strong> Rs.{totalPrice}/-</p>
                    </div>
                    <div className="button-container">
                        <Link 
                            to={`/payment?product=${product}&quantity=${quantity}&totalPrice=${totalPrice}`} 
                            className="payment-button"
                        >
                            Go to Payment
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
