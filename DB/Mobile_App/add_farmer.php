<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate User name from JSON $obj array and store into $name.

 
// Populate User email from JSON $obj array and store into $email.


	$full_name = $obj['full_name'];
	$farm_name = $obj['farm_name'];
	$state = $obj['state'];
	$farm_address = $obj['farm_address'];
	$phone_number = $obj['phone_number'];
	$email_address = $obj['email_address'];
	$farm_capacity = $obj['farm_capacity'];
	
 
// Populate Password from JSON $obj array and store into $password.

 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into enrolled_farmers(fname,farm_name,state,farm_address,phone_no,email,farm_capacity) values ('$full_name','$farm_name','$state','$farm_address','$phone_number','$email_address','$farm_capacity')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Registration Successful' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 
 }
 mysqli_close($con);
?>