<?php
// config.php - Chứa cấu hình chung

// Cho phép CORS (quan trọng khi gọi API từ client)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

// Thông tin database
define("DB_HOST", "127.0.0.1");
define("DB_USER", "saheddbuser");
define("DB_PASS", "Zi_3jLb3H");
define("DB_NAME", "sahed_db");
?>
