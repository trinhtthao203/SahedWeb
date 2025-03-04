<?php
require_once "database.php";

// Kiểm tra method HTTP
$method = $_SERVER["REQUEST_METHOD"];

if ($method === "GET") {
    // Lấy danh sách bài viết
    $result = $mysqli->query("SELECT * FROM Posts");
    $posts = [];

    while ($row = $result->fetch_assoc()) {
        $row["image"] = "http://sahed.agu.edu.vn/" . str_replace("\\", "/", $row["image"]); // Chuyển đường dẫn ảnh
        $posts[] = $row;
    }

    echo json_encode($posts);
} elseif ($method === "POST") {
    // Nhận dữ liệu từ client
    $data = json_decode(file_get_contents("php://input"), true);
    $title = $data["title"];
    $shortContent = $data["shortContent"];
    $image = $data["image"];
    $link = $data["link"];

    if (!$title || !$shortContent || !$image) {
        echo json_encode(["error" => "Thiếu dữ liệu!"]);
        exit;
    }

    // Chèn dữ liệu vào bảng Posts
    $stmt = $mysqli->prepare("INSERT INTO Posts (title, shortContent, image, link) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $title, $shortContent, $image, $link);
    $stmt->execute();

    echo json_encode(["message" => "Bài viết đã được thêm"]);
}
?>
