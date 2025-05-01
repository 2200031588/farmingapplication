<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Admin Registration</title>
</head>
<body>
<%@include file="mainnavbar.jsp" %>
<h3 align="center">Admin Registration Form</h3>
<div class="container">
<form method="post" action="insertadmin">
  
  <label>Enter Name</label>
  <input type="text" class="form-control" name="aname" required/>
  <br/>


  <label>Enter Email ID</label>
  <input type="email" name="aemail" class="form-control" required/>
  <br/>

  <label>Enter Password</label>
  <input type="password" name="apwd" class="form-control" required/>
  <br/>

 
  <label>Enter Contact</label>
  <input type="number" name="acontact" class="form-control" required/>
  <br/>

  <input type="submit" value="Register" class="btn btn-success"/>
  <input type="reset" value="Clear" class="btn btn-success"/>

</form>
</div>
</body>
</html>
