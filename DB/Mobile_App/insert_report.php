<?php 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	
	
	$json= file_get_contents('php://input');
	
	$obj = json_decode($json,true);
	
	$farm_name = $obj['farm_name'];
	$bird_age = $obj['bird_age'];
	$stock_size = $obj['stock_size'];
	$weight = $obj['weight'];
	$mortality = $obj['mortality'];
	$comment = $obj['comment'];
	$date = $obj['date'];
	
	
		$insert_sql= "INSERT INTO farmer_report (farm_name,bird_age,stock_size,weight,mortality,comment,date) VALUES ('$farm_name','$bird_age','$stock_size','$weight','$mortality','$comment','$date')";
		$insetInfo = mysqli_query($con, $insert_sql)
		if($insetInfo){
			$sucessMgt= "Report Sent Successful";
			$sucessMgtJson= json_encode($sucessMgt);
			echo $sucessMgtJson;
			
		}
		else{
			
			echo "Try Again";
			
		}
		
	
	mysqli_close($con);


?>
