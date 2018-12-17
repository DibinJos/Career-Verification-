<?php

include 'connect.php'; //For database coonnection
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Origin: *");
$success=false;
$postdata = file_get_contents("php://input");
$request = json_decode($_POST['data']);

	$candidateId=$request->candidateId;
	$degreeName=$request->degreeName;
	$specialisation=$request->specialisation;
	$regNumber=$request->regNumber;
	$college=$request->college;
	$university=$request->university;
	$batch=$request->batch;
	$cgpa=$request->cgpa;
	$region=$request->region;


			$sql = "INSERT INTO degree(candidateId,degree, specialisation, registrationNumber,college , university,batch, cgpa,region ) VALUES ('".$candidateId."','".$degreeName."','".$specialisation."','".$regNumber."','".$college."','".$university."','".$batch."','".$cgpa."','".$region."')";


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
