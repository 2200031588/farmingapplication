<%@ page import="com.klef.jfsd.springboot.model.Farmer" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
    
<%
    Farmer f = (Farmer) session.getAttribute("farmer");
%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Farmer Profile</title>
</head>
<body>
    <%@ include file="farmernavbar.jsp" %><br/><br/>
    <h3 align="center">My Profile</h3>
    <div align="center">
        <p>NAME: <%= f.getName() %></p>
        <p>EMAIL: <%= f.getEmail() %></p>
        <p>CONTACT: <%= f.getMobile() %></p>
        <p>VILLAGE: <%= f.getVillage() %></p>
        <p>CITY: <%= f.getCity() %></p>
        <p>STATE: <%= f.getState() %></p>
        <p>TOWN: <%= f.getTown() %></p>
    </div>
</body>
</html>

</html>
