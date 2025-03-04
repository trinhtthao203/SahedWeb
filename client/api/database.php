<?php
// database.php - Kết nối cơ sở dữ liệu
require_once "config.php";

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($mysqli->connect_error) {
    die(json_encode(["error" => "Kết nối thất bại: " . $mysqli->connect_error]));
}

// Thiết lập mã hóa UTF-8
$mysqli->set_charset("utf8");
?>
