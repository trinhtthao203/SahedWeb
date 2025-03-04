<?php
require_once "config.php";

// Lấy đường dẫn request
$request_uri = $_SERVER["REQUEST_URI"];
$method = $_SERVER["REQUEST_METHOD"];

// Điều hướng API
if (strpos($request_uri, "/api/posts") !== false) {
    require_once "posts.php";
} elseif (strpos($request_uri, "/api/about") !== false) {
    require_once "about.php";
} else {
    echo json_encode(["error" => "API không hợp lệ"]);
}
?>
