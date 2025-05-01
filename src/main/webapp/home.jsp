<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Farming App</title>
<style>
    /* Basic Reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        color: #333;
    }

    /* Navbar Styling */
    .navbar {
        background-color: #4CAF50; /* Green color for the farming theme */
        padding: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .navbar a {
        color: white;
        text-decoration: none;
        margin: 0 15px;
        font-size: 1.1em;
    }

    .navbar a:hover {
        text-decoration: underline;
    }

    /* Page Content Styling */
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    h1, h2, h3 {
        color: #333;
    }

    p {
        line-height: 1.6;
        margin-bottom: 1em;
    }

    /* Button Styling */
    button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #45a049;
    }

    /* Footer Styling */
    footer {
        background-color: #099268;
        color: white;
        text-align: center;
        padding: 1em 0;
        position: fixed;
        width: 100%;
        bottom: 0;
    }
</style>
</head>
<body>
<%@include file="mainnavbar.jsp" %>

<div class="container">
    <br/>
    <h1>Welcome to the Farming App</h1>
    <p>This application is designed to support farmers by providing essential tools and information for farming activities.</p>
</div>

<footer>
    &copy; 2024 Farming App. All rights reserved.
</footer>
</body>
</html>
