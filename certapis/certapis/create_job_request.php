<?php

include 'connect.php'; //For database coonnection
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Origin: *");
$success=false;
$postdata = file_get_contents("php://input");
$request = json_decode($_POST['data']);

	
	$jobId=$request->jobId;
	$candidateId=$request->candidateId;
	$candidateRemarks=$request->candidateRemarks;
	$status=$request->status;
	$employerId=$request->employerId;




			$sql = "INSERT INTO jobrequest (jobId,candidateId,employerId,candidateRemarks,status) VALUES ('".$jobId."','".$candidateId."','".$employerId."','".$candidateRemarks."','".$status."')";


		$run_query = $con->query($sql);
		echo mysqli_error($con);
		if ($run_query ) {

		    $success=true;
		  //  $result['all_graph_data']=$all_graph_data;
		} else {
		    $result['message']="Some Error";
		}

		$con->close();
		$result['success']=$success;
		echo json_encode($result);






//Closing the database connection
//$con->close();



?>
