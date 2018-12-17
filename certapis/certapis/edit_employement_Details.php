<?php

include 'connect.php'; //For database coonnection
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Origin: *");
$success=false;
$postdata = file_get_contents("php://input");
$request = json_decode($_POST['data']);

	$candidateId=$request->candidateId;
	$companyName=$request->companyName;
	$employeeId=$request->employeeId;
	$fromDate=$request->fromDate;
	$toDate=$request->toDate;
	$role=$request->role;
	$tenure=$request->tenure;
	$ctc=$request->ctc;


			$sql = "Update  employement set companyName='".$companyName."', fromDate='".$fromDate."', toDate='".$toDate."', role='".$role."',tenure='".$tenure."', ctc='".$ctc."'  where candidateId='".$candidateId."' and employeeId='".$employeeId."'";


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
