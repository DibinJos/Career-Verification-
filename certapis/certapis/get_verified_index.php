<?php

include 'connect.php'; //For database coonnection
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Origin: *");
$success=false;




			$sql1 = "SELECT * from predegree where status='Approved'";
			$sql2 = "SELECT * from degree where status='Approved'";
			$sql3 = "SELECT * from employement where status='Approved'";

			$run_query_1 = $con->query($sql1);
			$run_query_2 = $con->query($sql2);
			$run_query_3 = $con->query($sql3);
			$count1=$run_query_1->num_rows;
			$count2=$run_query_2->num_rows;
			$count3=$run_query_3->num_rows;

			//echo "his".mysqli_error($con);
			 $result['count']=$count1+$count2+$count3;

			$con->close();
			$result['success']=true;
			echo json_encode($result);






//Closing the database connection
//$con->close();



?>
