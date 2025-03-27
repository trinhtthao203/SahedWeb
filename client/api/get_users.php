<?php
require_once "database.php";
header("Content-Type: application/json");

$result = $mysqli->query("SELECT id, name, email, role FROM Users");
$users = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode(["users" => $users]);
?>
