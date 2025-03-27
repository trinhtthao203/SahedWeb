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
        $email = trim($data["email"] ?? "");
        $password = trim($data["password"] ?? "");

        if (!$name || !$email || !$password) {
            echo json_encode(["error" => "Vui lòng điền đầy đủ thông tin!"]);
            exit;
        }

        // Kiểm tra email đã tồn tại chưa
        $stmt = $mysqli->prepare("SELECT id FROM Users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            echo json_encode(["error" => "Email đã được sử dụng!"]);
            exit;
        }
        $stmt->close();

        // Hash mật khẩu và lưu vào CSDL
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $role = "user"; // Mặc định là user

        $stmt = $mysqli->prepare("INSERT INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $hashedPassword, $role);

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
        $email = trim($data["email"] ?? "");
        $password = trim($data["password"] ?? "");

        if (!$email || !$password) {
            echo json_encode(["error" => "Vui lòng nhập email và mật khẩu!"]);
            exit;
        }

        // Kiểm tra người dùng có tồn tại không
        $stmt = $mysqli->prepare("SELECT id, name, email, password, role FROM Users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        if (!$user || !password_verify($password, $user["password"])) {
            echo json_encode(["error" => "Email hoặc mật khẩu không đúng!"]);
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
