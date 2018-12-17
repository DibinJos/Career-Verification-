<?php

include 'connect.php'; //For database coonnection
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Origin: *");
$success=false;
$postdata = file_get_contents("php://input");
$request = json_decode($_POST['data']);

	
	$courseId=$request->courseId;
	$candidateId=$request->candidateId;
	$candidateRemarks=$request->candidateRemarks;
	$status=$request->status;
	$educatorId=$request->educatorId;




			$sql = "INSERT INTO courserequest (courseId,candidateId,educatorId,candidateRemarks,status) VALUES ('".$courseId."','".$candidateId."','".$educatorId."','".$candidateRemarks."','".$status."')";


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
