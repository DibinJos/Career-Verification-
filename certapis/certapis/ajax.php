<?php

//Including Database configuration file.

include 'connect.php';


//Getting value of "search" variable from "script.js".

if (isset($_POST['search'])) {

//Search box value assigning to $Name variable.

   $Name = $_POST['search'];

//Search query.

   $Query = "SELECT name FROM partners WHERE name LIKE '%$Name%' LIMIT 5";

//Query execution

   $ExecQuery = MySQLi_query($con, $Query);

   //Fetching result from database.

   while ($Result = MySQLi_fetch_array($ExecQuery)) {

      echo $Result['Name']; 
	}
}


?>

</ul>