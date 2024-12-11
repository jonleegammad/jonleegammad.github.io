<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
	
	<form action="#">
<input type="text" name="username"> <br>
		<input type="text" name="password"> <br>
		<input type="submit" name="submit"> <br>
</form>
	<?php
// Database connection settings
$dsn = 'odbc:Driver={SQL Server};Server=your_server_name;Database=your_database_name;';
$user = 'your_username';   // Your database username
$pass = 'your_password';   // Your database password

try {
    // Create PDO instance
    $pdo = new PDO($dsn, $user, $pass);

    // Sample query to retrieve data
    $sql = 'SELECT * FROM employees';  // Replace 'employees' with your table name
    foreach ($pdo->query($sql) as $row) {
        print_r($row); // Output the row
    }
} catch (PDOException $e) {
    // Handle connection error
    echo "Error: " . $e->getMessage();
}
?>

	
	
	
	
	

	
	
	


</body>
</html>