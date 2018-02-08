<?php

// Connect to MySQL
// Set password with XAMPP shell " mysqladmin.exe -u root password (password) "  
$con = mysqli_connect("localhost","root","xmppassword","jsshoutbox");

if (mysqli_connect_errno()) {
	echo 'Failed to connect: '.mysqli_connect_error();

}

?>