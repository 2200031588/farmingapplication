import React from 'react';
import Appbar from './Appbar';

const About = () => {
  return (
    <div>
      {/* Appbar Component */}
      <Appbar />

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>We are committed to empowering farmers by helping them turn their crops into valuable products and connect with global buyers.</p>

        <h3>Our Mission</h3>
        <p>Our mission is to foster rural entrepreneurship by promoting the use of technology in agriculture, improving product value, and connecting farmers with global markets.</p>

        <h3>Our Vision</h3>
        <p>To become the leading platform supporting farmers globally, enabling them to grow their businesses and contribute to sustainable agriculture.</p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
      </footer>

      {/* CSS Styles */}
      <style>
        {`
          /* About Section */
          .about-section {
            padding: 40px 20px;
            text-align: center;
            background-color: #f9f9f9;
          }

          .about-section h2 {
            color: #087f5b;
          }

          .about-section p {
            color: #333;
            font-size: 18px;
          }

          .about-section h3 {
            color: #087f5b;
            margin-top: 20px;
          }

          /* Footer */
          footer {
            text-align: center;
            padding: 10px;
            background-color: #087f5b;
            color: white;
            position: fixed;
            width: 100%;
            bottom: 0;
          }
        `}
      </style>
    </div>
  );
};

export default About;
