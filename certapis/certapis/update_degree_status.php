<?php

include 'connect.php'; //For database coonnection
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Origin: *");

$success=false;
$postdata = file_get_contents("php://input");
$request = json_decode($_POST['data']);

$approve=$request->status;
$degreeName=$request ->degreeName;
$candidateId=$request->candidateId;



			$sql = "UPDATE degree SET status='".$approve."' WHERE degree='".$degreeName."' and candidateId='".$candidateId."'";

			$run_query = $con->query($sql);
			//echo mysqli_error($con);
			if ($run_query ) {

				$success=true;
				 //$result['customer_data']=$customer_data;
			} else {
					$result['message']="Some Error".mysqli_error($con);
			}

			$con->close();
			$result['success']=$success;
			echo json_encode($result);






//Closing the database connection
//$con->close();



?>
