<?php
require_once "database.php";
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Content-Type: application/json");

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $action = $data["action"] ?? "";

    // **Xử lý đăng ký tài khoản**
    if ($action === "register") {
        $name = trim($data["name"] ?? "");
        $username = trim($data["username"] ?? "");
        $password = trim($data["password"] ?? "");

        if (!$name || !$username || !$password) {
            echo json_encode(["error" => "Vui lòng điền đầy đủ thông tin!"]);
            exit;
        }

        // Kiểm tra username đã tồn tại chưa
        $stmt = $mysqli->prepare("SELECT id FROM Users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            echo json_encode(["error" => "username đã được sử dụng!"]);
            exit;
        }
        $stmt->close();

        // Hash mật khẩu và lưu vào CSDL
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $role = "user"; // Mặc định là user

        $stmt = $mysqli->prepare("INSERT INTO Users (name, username, password, role) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $username, $hashedPassword, $role);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Đăng ký thành công!"]);
        } else {
            echo json_encode(["error" => "Lỗi khi đăng ký!"]);
        }

        $stmt->close();
        exit;
    }

    // **Xử lý đăng nhập**
    if ($action === "login") {
        $username = trim($data["username"] ?? "");
        $password = trim($data["password"] ?? "");

        if (!$username || !$password) {
            echo json_encode(["error" => "Vui lòng nhập username và mật khẩu!"]);
            exit;
        }

        // Kiểm tra người dùng có tồn tại không
        $stmt = $mysqli->prepare("SELECT id, name, username, password, role FROM Users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        if (!$user || !password_verify($password, $user["password"])) {
            echo json_encode(["error" => "username hoặc mật khẩu không đúng!"]);
            exit;
        }

        // Xóa mật khẩu trước khi gửi phản hồi
        unset($user["password"]);

        // Kiểm tra quyền Admin
        $isAdmin = ($user["role"] === "admin");

        echo json_encode([
            "message" => "Đăng nhập thành công!",
            "user" => $user,
            "isAdmin" => $isAdmin
        ]);
        exit;
    }
}

// Nếu request không hợp lệ
echo json_encode(["error" => "Phương thức không hợp lệ!"]);
exit;
?>
