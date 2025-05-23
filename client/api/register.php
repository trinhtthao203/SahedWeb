<?php
require_once "database.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$method = $_SERVER["REQUEST_METHOD"];

if ($method !== "POST") {
    echo json_encode(["error" => "Chỉ chấp nhận phương thức POST."]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$action = $data["action"] ?? "";

if ($action !== "login") {
    echo json_encode(["error" => "Hành động không hợp lệ."]);
    exit;
}

$username = trim($data["username"] ?? "");
$password = trim($data["password"] ?? "");

if (!$username || !$password) {
    echo json_encode(["error" => "Vui lòng nhập username và mật khẩu!"]);
    exit;
}

$stmt = $mysqli->prepare("SELECT id, name, username, password, role FROM Users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if (!$user || !password_verify($password, $user["password"])) {
    echo json_encode(["error" => "Tên đăng nhập hoặc mật khẩu không đúng!"]);
    exit;
}

unset($user["password"]);

echo json_encode([
    "message" => "Đăng nhập thành công!",
    "user" => $user
]);
exit;
?>