<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="jakarta.tags.core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Farmer List</title>
    <link rel="stylesheet" href="path_to_your_stylesheet.css"> <!-- Link to your stylesheet if needed -->
</head>
<body>

    <%@ include file="adminnavbar.jsp" %>

    <div style="text-align: center; margin-top: 20px;">
        <h2>Farmer Overview</h2>
        <p>Total farmers: <strong><c:out value="${count}" /></strong></p>
    </div>

    <div style="display: flex; justify-content: center; margin-top: 20px;">
        <table border="2" class="table table-striped" style="width: 80%; text-align: center;">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact No</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${farmerlist}" var="farmer">
                    <tr>
                        <td><c:out value="${farmer.id}" /></td>
                        <td><c:out value="${farmer.name}" /></td>
                        <td><c:out value="${farmer.email}" /></td>
                        <td><c:out value="${farmer.mobile}" /></td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>

</body>
</html>
