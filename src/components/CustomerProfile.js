import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerProfile = ({ customerId }) => {
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Fetch the customer profile by ID
    if (!customerId) {
      setError('Invalid customer ID.');
      setIsLoading(false);
      return;
    }

    axios
      .get(`http://localhost:8080/customer/viewProfile/${customerId}`)
      .then((response) => {
        const { data } = response;
        if (data.status === 'success') {
          setCustomer(data.customer);
          setError('');
        } else {
          setError(data.message || 'Failed to fetch customer details.');
        }
      })
      .catch((err) => {
        setError('Failed to fetch customer details.');
        console.error('Error fetching customer:', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [customerId]);

  // Loading state
  if (isLoading) {
    return <div>Loading customer details...</div>;
  }

  // Error state
  if (error) {
    return <div className="error">{error}</div>;
  }

  // Customer profile display
  if (customer) {
    return (
      <div className="customer-profile">
        <h2>Customer Profile</h2>
        <div className="profile-details">
          <p>
            <strong>ID:</strong> {customer.id}
          </p>
          <p>
            <strong>Name:</strong> {customer.name}
          </p>
          <p>
            <strong>Address:</strong> {customer.address}
          </p>
          <p>
            <strong>Contact:</strong> {customer.contact}
          </p>
        </div>
      </div>
    );
  }

  // Fallback state if no customer data is found
  return <div>No customer details available.</div>;
};

export default CustomerProfile;
