<?php

include 'connect.php'; //For database coonnection
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Origin: *");
$success=false;




			$sql = "SELECT * from degree";

			$run_query = $con->query($sql);
			//echo "his".mysqli_error($con);
			if ($run_query && $run_query->num_rows > 0) {
				//echo $con->mysqli_error();
				$request_details=array();
			    while($row =  mysqli_fetch_assoc($run_query) ) {
			       // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
			    	array_push($request_details, $row);
			    }
			    $success=true;

			    $result['requestList']=$request_details;

			} else {
			    $result['message']="Some Error".mysqli_error($con);
			}

			$con->close();
			$result['success']=$success;
			echo json_encode($result);






//Closing the database connection
//$con->close();



?>
