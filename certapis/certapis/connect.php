<?php

include 'config.php';

$con = mysqli_connect(HOSTNAME,DB_USER,DB_PASS,DB_NAME);

	// Check connection
	if (mysqli_connect_errno()) {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}





?>
