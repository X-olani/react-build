<?php
$servername = "127.0.0.1:3307";
$username = "root";
$password = "test";
$database = "doctor_db";


// Create connection
$db = mysqli_connect($servername, $username, $password, $database);

// Check connection`

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}