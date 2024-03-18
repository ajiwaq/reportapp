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

	$user_no = $obj['user_no'];
	$farm_name = $obj['farm_name'];
	$bird_age = $obj['bird_age'];
	$stock_size = $obj['stock_size'];
	$weight = $obj['weight'];
	$mortality = $obj['mortality'];
	$comment = $obj['comment'];
	$date = $obj['date'];


 
// Populate Password from JSON $obj array and store into $password.

 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into farmer_report(farm_code,farm_name,bird_age,stock_size,weight,mortality,comment,date) values ('$user_no','$farm_name','$bird_age','$stock_size','$weight','$mortality','$comment','$date')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Report Sent Successfully' ;
 
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