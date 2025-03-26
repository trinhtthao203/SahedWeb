<?php
// Cho phép CORS từ mọi nguồn (hoặc chỉ từ localhost nếu cần bảo mật hơn)
header("Access-Control-Allow-Origin: *"); // Hoặc thay * bằng http://localhost:5173 nếu muốn giới hạn
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Xử lý request OPTIONS (Preflight Request)
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "ttthao@agu.edu.vn";
    $subject = "Phản hồi từ người dùng";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];

    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    $message = "Họ tên: $name\nEmail: $email\nNội dung:\n$comment";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => "Email đã gửi thành công!"]);
    } else {
        echo json_encode(["error" => "Không thể gửi email."]);
    }
} else {
    echo json_encode(["error" => "Chỉ chấp nhận phương thức POST."]);
}
?>
