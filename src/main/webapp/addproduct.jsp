<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Product</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h2 class="text-center">Add New Product</h2>
        <form action="/addproduct" method="POST">
            <div class="form-group">
                <label for="name">Product Name:</label>
                <input type="text" class="form-control" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="description">Product Description:</label>
                <textarea class="form-control" id="description" name="description" rows="4" required></textarea>
            </div>
            
            <div class="form-group">
                <label for="price">Product Price:</label>
                <input type="number" class="form-control" id="price" name="price" step="0.01" required>
            </div>
            
            <div class="form-group">
                <label for="category">Product Category:</label>
                <input type="text" class="form-control" id="category" name="category" required>
            </div>
            
            <button type="submit" class="btn btn-primary">Add Product</button>
        </form>

        <c:if test="${not empty message}">
            <div class="alert alert-success mt-3">
                ${message}
            </div>
        </c:if>

        <a href="/productlist" class="btn btn-secondary mt-3">Back to Product List</a>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>
</html>
