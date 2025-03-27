<?php
require_once "database.php";
header("Content-Type: application/json");

$result = $mysqli->query("SELECT id, title, author, date FROM Posts");
$posts = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode(["posts" => $posts]);
?>
