<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
  <%@taglib uri="jakarta.tags.core" prefix="c" %>
<!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8">
<title>Home</title>
</head>
<body>
<%@include file="adminnavbar.jsp" %><br/>
Total customers:<c:out value="${count}"></c:out>
</body>
</html>