<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Farmer Registration</title>
</head>
<body>
<%@include file="mainnavbar.jsp" %>
<h3 align="center">Farmer Registration Form</h3>
<div class="container">
<form method="post" action="insertfarmer">
    <label>Enter Name</label>
    <input type="text" class="form-control" name="fname" required/>
    <br/>

    <label>Enter Email ID</label>
    <input type="email" name="femail" class="form-control" required/>
    <br/>

    <label>Enter Password</label>
    <input type="password" name="fpwd" class="form-control" required/>
    <br/>

    <label>Enter State</label>
    <input type="text" class="form-control" name="fstate" required/>
    <br/>

    <label>Enter City</label>
    <input type="text" class="form-control" name="fcity" required/>
    <br/>

    <label>Enter Town</label>
    <input type="text" class="form-control" name="ftown" required/>
    <br/>

    <label>Enter Village</label>
    <input type="text" class="form-control" name="fvillage" required/>
    <br/>

    <label>Enter Mobile Number</label>
    <input type="number" name="fmobile" class="form-control" required/>
    <br/>

    <input type="submit" value="Register" class="btn btn-success"/>
    <input type="reset" value="Clear" class="btn btn-success"/>
</form>
</div>
</body>
</html>
