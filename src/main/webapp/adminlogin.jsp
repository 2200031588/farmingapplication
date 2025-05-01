<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home</title>
</head>
<body>
<%@include file="mainnavbar.jsp" %>
<h3 align="center">Admin Login Form</h3>
<div class="container">
<form method="post" action="checkadminlogin">



<label>Enter Username</label>
<input type="text" name="auname" class="form-control" required/>
<br/>

<label>Enter Password</label>
<input type="password" name="apwd" class="form-control" required/>
<br/>


<input type="submit" value="Login" class="btn btn-success"/>
<input type="reset" value="Clear" class="btn btn-success"/>
</form>
</div>
</body>
</html>