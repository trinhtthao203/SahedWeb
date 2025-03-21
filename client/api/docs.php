<?php
require_once "config.php";
require_once "database.php";

// Thiết lập UTF-8 để hiển thị tiếng Việt đúng
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Kết nối CSDL
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($mysqli->connect_error) {
    die(json_encode(["error" => "Lỗi kết nối: " . $mysqli->connect_error]));
}
$mysqli->set_charset("utf8mb4"); // 🛠 Đặt charset để hỗ trợ tiếng Việt

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "GET") {
    $type = isset($_GET["type"]) ? $mysqli->real_escape_string($_GET["type"]) : "";
    $lang = isset($_GET["lang"]) ? $mysqli->real_escape_string($_GET["lang"]) : "vi";

    if (!$type) {
        echo json_encode(["error" => "Thiếu tham số type"]);
        exit;
    }

    // Lấy nội dung theo type
    $query = "SELECT content FROM Docs WHERE type = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("s", $type);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        $contentData = json_decode($row["content"], true); // Chuyển JSON thành mảng
        $content = $contentData[$lang] ?? $contentData["vi"] ?? ""; // Lấy nội dung theo ngôn ngữ
        echo json_encode(["content" => $content], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(["error" => "Không tìm thấy nội dung"]);
    }
} 

elseif ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data || !isset($data["content"]) || !isset($data["lang"]) || !isset($data["type"])) {
        echo json_encode(["error" => "Dữ liệu không hợp lệ"]);
        exit;
    }

    $type = $mysqli->real_escape_string($data["type"]);
    $lang = $mysqli->real_escape_string($data["lang"]);
    $newContent = $data["content"];

    // Lấy dữ liệu cũ từ CSDL
    $query = "SELECT content FROM Docs WHERE type = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("s", $type);
    $stmt->execute();
    $result = $stmt->get_result();

    $oldData = ($result->num_rows > 0) ? json_decode($result->fetch_assoc()["content"], true) : [];

    // Cập nhật nội dung theo ngôn ngữ
    $oldData[$lang] = $newContent;
    $contentJSON = json_encode($oldData, JSON_UNESCAPED_UNICODE);

    // Nếu bảng trống, thêm mới. Nếu có rồi thì cập nhật.
    if ($result->num_rows > 0) {
        $stmt = $mysqli->prepare("UPDATE Docs SET content = ? WHERE type = ?");
    } else {
        $stmt = $mysqli->prepare("INSERT INTO Docs (content, type) VALUES (?, ?)");
    }

    $stmt->bind_param("ss", $contentJSON, $type);
    if ($stmt->execute()) {
        echo json_encode(["message" => "Nội dung đã được cập nhật"]);
    } else {
        echo json_encode(["error" => "Lỗi khi lưu dữ liệu: " . $stmt->error]);
    }
}

$mysqli->close();
?>
