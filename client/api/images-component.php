<?php
// Bật thông báo lỗi để debug
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Kết nối DB
require_once "config.php";
require_once "database.php";

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "POST") {
    $category = isset($_POST["category"]) ? $mysqli->real_escape_string($_POST["category"]) : "";
    $order = isset($_POST["order"]) ? intval($_POST["order"]) : 0;

    if (empty($category)) {
        echo json_encode(["error" => "Thiếu category"]);
        exit;
    }

    $query = "SELECT url, description FROM Images WHERE category = ? AND `order` = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("si", $category, $order);
    $stmt->execute();
    $result = $stmt->get_result();

    $images = [];
    while ($row = $result->fetch_assoc()) {
        $row["url"] = "http://sahed.agu.edu.vn/" . str_replace("\\", "/", $row["url"]);
        $row["description"] = json_decode($row["description"], true);
        $images[] = $row;
    }

    echo json_encode($images);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Phương thức không được hỗ trợ"]);
}
