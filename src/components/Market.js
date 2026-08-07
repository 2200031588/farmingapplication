import React from 'react';

const Market = () => {
  return (
    <>
      <style>
        {`
        /* General Styles */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f7f4f1;
            box-sizing: border-box;
        }

        /* AppBar Styles */
        .appbar {
            background-color: #406343;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
        }

        .appbar .nav-links {
            display: flex;
        }

        .appbar a {
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
            font-weight: bold;
        }

        .appbar a:hover {
            background-color: #2f4f33;
            color: #f2f2f2;
        }

        /* Market Section */
        .market-section {
            max-width: 1200px;
            margin: 3rem auto;
            background-color: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .market-section h2 {
            color: #406343;
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }

        .market-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1.5rem;
        }

        .market-table th, .market-table td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ccc;
        }

        .market-table th {
            background-color: #406343;
            color: white;
        }

        .market-table td {
            background-color: #f7f7f7;
        }

        .market-table tr:nth-child(even) td {
            background-color: #e9e9e9;
        }

        /* Footer */
        footer {
            background-color: #5b8a72;
            color: white;
            text-align: center;
            padding: 1.5rem 0;
            font-size: 1rem;
        }
        `}
      </style>

      {/* AppBar */}
      <div className="appbar">
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/orders">Orders</a>
          <a href="/market">Market</a>
          <a href="/support">Support</a>
        </div>
      </div>

      {/* Market Section */}
      <section className="market-section">
        <h2>Market Trends</h2>
        <p>Keep track of the latest market trends for agricultural products, including price changes and demand fluctuations.</p>

        {/* Market Trends Table */}
        <table className="market-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Current Price (per kg)</th>
              <th>Price Change (%)</th>
              <th>Demand Level</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rice</td>
              <td>₹65.60</td>
              <td>+2.5%</td>
              <td>High</td>
              <td>Rising</td>
            </tr>
            <tr>
              <td>Wheat</td>
              <td>₹53.30</td>
              <td>-1.2%</td>
              <td>Moderate</td>
              <td>Falling</td>
            </tr>
            <tr>
              <td>Corn</td>
              <td>₹41.00</td>
              <td>+1.8%</td>
              <td>High</td>
              <td>Stable</td>
            </tr>
            <tr>
              <td>Vegetables (Mixed)</td>
              <td>₹98.40</td>
              <td>+0.5%</td>
              <td>Moderate</td>
              <td>Stable</td>
            </tr>
            <tr>
              <td>Fruits (Mixed)</td>
              <td>₹123.00</td>
              <td>+3.0%</td>
              <td>High</td>
              <td>Rising</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Market;
