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

        $sth = $dbh->prepare('INSERT INTO tbl_patients VALUES(NULL,?,?,?,?,?,?,?)');
        $sth->bindValue(1, $user->name, PDO::PARAM_STR);
        $sth->bindValue(2, $user->surname, PDO::PARAM_STR);
        $sth->bindValue(3, $user->email, PDO::PARAM_STR);
        $sth->bindValue(4, $user->phone, PDO::PARAM_STR);
        $sth->bindValue(5, $user->medical, PDO::PARAM_STR);
        $sth->bindValue(6, $user->age, PDO::PARAM_INT);
        $sth->bindValue(7, $user->gender, PDO::PARAM_STR);



        if ($sth->execute()) {
            $response = ['status' => 1, 'message' => "Record saved"];
        } else {
            $response = ['status' => 1, 'message' => "Record not saved "];
        }

        echo json_encode($response);
    } catch (PDOException $e) {

        echo "connection failed: " . $e->getMessage();
    }
} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {

    try {
        $dsn = 'mysql:dbname=doctor_db;host=127.0.0.1:3307';
        $dbh = new PDO($dsn, "root", "test");

        $sth = $dbh->prepare('SELECT * FROM tbl_patients');

        $sth->execute();
        $users = $sth->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
    } catch (PDOException $e) {

        echo "connection failed: " . $e->getMessage();
    }
}