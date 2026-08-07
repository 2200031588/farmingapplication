import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const product = queryParams.get('product');
    const quantity = queryParams.get('quantity');
    const totalPrice = queryParams.get('totalPrice');
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState('Credit Card');

    const handlePayment = () => {
        // Logic for processing payment can go here
        alert('Payment successful!');
        navigate('/customerhome'); // Redirect to home after payment
    };

    return (
        <div>
            <style>
                {`
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background-color: #406343;
                        color: black;
                        margin: 0;
                        padding: 0;
                    }

                    .payment-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 80vh;
                    }

                    .payment-box {
                        background-color: white;
                        border-radius: 12px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                        padding: 30px;
                        width: 80%;
                        max-width: 600px;
                        text-align: center;
                    }

                    h1, h2 {
                        color: #406343;
                    }

                    select, button {
                        margin: 15px 0;
                        padding: 10px;
                        font-size: 1rem;
                        width: 80%;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                    }

                    button {
                        background-color: #406343;
                        color: white;
                        border: none;
                        cursor: pointer;
                    }

                    button:hover {
                        background-color: #5c7b64;
                    }
                `}
            </style>

            <h1>Payment Page</h1>
            <div className="payment-container">
                <div className="payment-box">
                    <h2>Product: {product}</h2>
                    <p>Quantity: {quantity} kg</p>
                    <p>Total Price: Rs.{totalPrice}/-</p>

                    <h3>Select Payment Method</h3>
                    <select 
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="UPI">UPI</option>
                        <option value="Net Banking">Net Banking</option>
                    </select>
                    
                    <button onClick={handlePayment}>
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
