<%@page import="com.klef.jfsd.springboot.model.Farmer"%>
<%@page import="com.klef.jfsd.springboot.model.Customer"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
Farmer f=(Farmer)session.getAttribute("farmer");
%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Farmer Home</title>
</head>
<body>
<%@include file="farmernavbar.jsp" %><br/>
Welcome <%=f.getName() %>
</body>
</html>