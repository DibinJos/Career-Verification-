<?php

include 'connect.php'; //For database coonnection
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Origin: *");
$success=false;
$postdata = file_get_contents("php://input");
$request = json_decode($_POST['data']);


	$candidateId=$request->candidateId;
	$requestorRemarks=$request->requestorRemarks;
	$status=$request->status;
	$verifierRemarks=$request->verifierRemarks;
	$educatorId=$request->educatorId;



			$sql = "INSERT INTO verificationrequest (candidateId,requestorRemarks,verifierRemarks,status,educatorId ) VALUES ('".$candidateId."','".$requestorRemarks."','".$verifierRemarks."','".$status."','".$educatorId."')";


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
