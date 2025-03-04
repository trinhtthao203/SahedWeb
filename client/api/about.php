<?php
require_once "config.php";
require_once "database.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Kết nối CSDL
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($mysqli->connect_error) {
    die(json_encode(["error" => "Lỗi kết nối: " . $mysqli->connect_error]));
}

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "GET") {
    $result = $mysqli->query("SELECT * FROM Abouts LIMIT 1");
    $about = $result->fetch_assoc();
    echo json_encode($about);
} elseif ($method === "POST") {
    // Đọc dữ liệu từ React
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!$data || !isset($data["content"])) {
        echo json_encode(["error" => "Dữ liệu không hợp lệ"]);
        exit;
    }

    $content = $data["content"];

    // Kiểm tra lỗi SQL
    $stmt = $mysqli->prepare("DELETE FROM Abouts");
    if (!$stmt->execute()) {
        echo json_encode(["error" => "Lỗi khi xóa dữ liệu: " . $stmt->error]);
        exit;
    }

    $stmt = $mysqli->prepare("INSERT INTO Abouts (content) VALUES (?)");
    $stmt->bind_param("s", $content);
    if ($stmt->execute()) {
        echo json_encode(["message" => "Nội dung About đã cập nhật"]);
    } else {
        echo json_encode(["error" => "Lỗi khi lưu dữ liệu: " . $stmt->error]);
    }
}
?>
