<?php

define("HOSTNAME",'localhost');
define("DB_USER",'root');
define("DB_PASS",'');
define("DB_NAME",'livestock_db');

$con = mysqli_connect(HOSTNAME,DB_USER,DB_PASS,DB_NAME);

	// Check connection
	if (mysqli_connect_errno()) {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

?>
