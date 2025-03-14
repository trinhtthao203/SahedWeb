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
    $lang = isset($_GET["lang"]) ? $_GET["lang"] : "vi"; // Mặc định là tiếng Việt

    $result = $mysqli->query("SELECT content FROM Abouts LIMIT 1");
    if ($result && $row = $result->fetch_assoc()) {
        $contentData = json_decode($row["content"], true); // Chuyển JSON thành mảng
        $content = $contentData[$lang] ?? $contentData["vi"] ?? ""; // Lấy nội dung theo ngôn ngữ
        echo json_encode(["content" => $content]);
    } else {
        echo json_encode(["error" => "Không tìm thấy nội dung"]);
    }
} 

elseif ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data || !isset($data["content"]) || !isset($data["lang"])) {
        echo json_encode(["error" => "Dữ liệu không hợp lệ"]);
        exit;
    }

    $lang = $data["lang"];
    $newContent = $data["content"];

    // Lấy dữ liệu cũ từ CSDL
    $result = $mysqli->query("SELECT content FROM Abouts LIMIT 1");
    $oldData = ($result && $row = $result->fetch_assoc()) ? json_decode($row["content"], true) : [];

    // Cập nhật nội dung theo ngôn ngữ
    $oldData[$lang] = $newContent;
    $contentJSON = json_encode($oldData, JSON_UNESCAPED_UNICODE);

    // Nếu bảng trống, thêm mới. Nếu có rồi thì cập nhật.
    if ($result->num_rows > 0) {
        $stmt = $mysqli->prepare("UPDATE Abouts SET content = ?");
    } else {
        $stmt = $mysqli->prepare("INSERT INTO Abouts (content) VALUES (?)");
    }

    $stmt->bind_param("s", $contentJSON);
    if ($stmt->execute()) {
        echo json_encode(["message" => "Nội dung About đã cập nhật"]);
    } else {
        echo json_encode(["error" => "Lỗi khi lưu dữ liệu: " . $stmt->error]);
    }
}
?>
