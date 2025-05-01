<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="style.css"/>
<title>JFSD - Farming App</title>

<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f3f4f6;
        color: #333;
        margin: 0;
        padding: 0;
    }

    h2 {
        color: #099268;
        font-weight: bold;
        margin: 20px 0;
    }

    .navbar {
        background-color: #099268;
        padding: 15px;
        text-align: center;
    }

    .navbar a {
        color: white;
        text-decoration: none;
        font-size: 16px;
        margin: 0 15px;
        padding: 8px 12px;
        border-radius: 4px;
        transition: background-color 0.3s;
    }

    .navbar a:hover {
        background-color: #077a54; /* Slightly darker shade for hover effect */
    }

    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
    }
</style>
</head>

<body>
    <div class="navbar">
        <a href="/">Home</a>
        <a href="/customerreg">Customer Registration</a>
        <a href="/customerlogin">Customer Login</a>
        <a href="farmerreg">Farmer Registration</a>
        <a href="farmerlogin">Farmer Login</a>
        <a href="adminlogin">Admin Login</a>
    </div>

    <div class="container">
        <p>Welcome to the Farming App! This platform is designed to support farmers and customers by providing essential tools for agricultural activities.</p>
    </div>
</body>
</html>
