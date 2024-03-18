<?php
	
	// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Creating connection.
 $conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	
	mysql_select_db($dbname, $conn);

	// Type your website name or domain name here.
	$domain_name = "https://broilerhub.com/farmer_report/" ;
	
	// Image uploading folder.
	$target_dir = "upload";
	
	// Generating random image name each time so image name will not be same .
	$target_dir = $target_dir . "/" .rand() . "_" . time() . ".jpeg";
	
	// Receiving image tag sent from application.
	$img_tag = $_POST["image_tag"];
	
	// Receiving image sent from Application	
	if(move_uploaded_file($_FILES['image']['tmp_name'], $target_dir)){
		
		// Adding domain name with image random name.
		$target_dir = $domain_name . $target_dir ;
		
		// Inserting data into MySQL database.
		mysql_query("insert into image_upload_table ( image_tag, image_path) VALUES('$img_tag' , '$target_dir')");
		
		$MESSAGE = "Image Uploaded Successfully." ;
			
		// Printing response message on screen after successfully inserting the image .	
		echo json_encode($MESSAGE);
	}


?>
