<?php include 'database.php'; ?>
<?php
	// If variables have values
	if(isset($_POST['name']) && isset($_POST['shout'])){
		// Prevent hacking
		$name = mysqli_real_escape_string($con, $_POST['name']);
		$shout = mysqli_real_escape_string($con, $_POST['shout']);
		$date = mysqli_real_escape_string($con, $_POST['date']);

		// Set Timezone
		date_default_timezone_set('America/Los_Angeles');
		$date = date('h:i:s a',time());

		// Push variables into the database
		$query = "INSERT INTO shouts (name, shout, date)
		VALUES ('$name','$shout','$date')";

		// Check if the variables are in the database
		if (!mysqli_query($con, $query))
		{
			echo 'Error: '.myqli_error($con);
		}else {
			echo '<li>'.$name.': '.$shout.' ['.$date.'] </li>';
	}	}
?>