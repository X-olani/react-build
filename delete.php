<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



include "dbConnection.php";


if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $user = json_decode(file_get_contents('php://input'));



    try {
        $dsn = 'mysql:dbname=doctor_db;host=127.0.0.1:3307';
        $dbh = new PDO($dsn, "root", "test");

        $sth = $dbh->prepare("DELETE FROM tabl_appointment WHERE id='$user->id'");





        if ($sth->execute()) {
            $response = ['status' => 1, 'message' => "Record saved"];
        } else {
            $response = ['status' => 1, 'message' => "Record not saved "];
        }

        echo json_encode($response);
    } catch (PDOException $e) {

        echo "connection failed: " . $e->getMessage();
    }
};