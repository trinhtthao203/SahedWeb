<?php
header("Content-Type: application/json");
$host = "172.16.0.12";  // Hoặc DB_HOST trên cPanel
$user = "saheddbuser";       // DB_USER
$pass = "Zi_3jLb3H";           // DB_PASS
$dbname = "sahed_db";     // DB_NAME

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "Kết nối thất bại"]));
}

$sql = "SELECT * FROM posts";
$result = $conn->query($sql);

$posts = [];
while ($row = $result->fetch_assoc()) {
    $posts[] = $row;
}

echo json_encode($posts);
?>
