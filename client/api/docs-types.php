<?php
require_once "config.php";
require_once "database.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Kết nối CSDL
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
$mysqli->set_charset("utf8mb4");

$result = $mysqli->query("SELECT DISTINCT type FROM docs");
$types = [];

while ($row = $result->fetch_assoc()) {
    $types[] = $row["type"];
}

echo json_encode($types, JSON_UNESCAPED_UNICODE);
?>
