<?php
require_once "config.php";
require_once "database.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "GET") {
    // Nhận tham số category từ query string
    $category = isset($_GET["category"]) ? $mysqli->real_escape_string($_GET["category"]) : "";

    if (empty($category)) {
        echo json_encode(["error" => "Thiếu category"]);
        exit;
    }

    $query = "SELECT url FROM Images WHERE category = ? ORDER BY `order` ASC";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("s", $category);
    $stmt->execute();
    $result = $stmt->get_result();

    $images = [];
    while ($row = $result->fetch_assoc()) {
        // Chuyển đường dẫn ảnh thành dạng đầy đủ
        $row["url"] = "http://sahed.agu.edu.vn/" . str_replace("\\", "/", $row["url"]);
        $images[] = $row;
    }

    echo json_encode($images);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Phương thức không được hỗ trợ"]);
}
?>
