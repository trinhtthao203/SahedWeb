<?php
require_once "database.php";
error_reporting(E_ALL);
ini_set('display_errors', 1);

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "GET") {
    $lang = $_GET["lang"] ?? "en"; // Ngôn ngữ mặc định là tiếng Anh
    $id = $_GET["id"] ?? null; // Lấy bài viết theo ID nếu có

    if ($id) {
        // Lấy bài viết theo ID
        $stmt = $mysqli->prepare("SELECT content, image FROM Posts WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $post = $result->fetch_assoc();

        if ($post) {
            $content = json_decode($post["content"], true);
            
            // Nếu bài viết không có title trong ngôn ngữ được chọn, bỏ qua
            if (empty($content[$lang]["title"])) {
                echo json_encode(["error" => "Bài viết không tồn tại trong ngôn ngữ này"]);
                exit;
            }

            $post["title"] = $content[$lang]["title"];
            $post["shortContent"] = $content[$lang]["shortContent"] ?? "";
            $post["link"] = $content[$lang]["link"] ?? "#";
            $post["image"] = "https://sahed.agu.edu.vn/" . str_replace("\\", "/", $post["image"]);
            unset($post["content"]); // Không gửi toàn bộ JSON
        }

        echo json_encode($post ?: ["error" => "Bài viết không tồn tại"]);
    } else {
        // Lấy danh sách bài viết
        $result = $mysqli->query("SELECT id, content, image FROM Posts ORDER BY created_at DESC");
        $posts = [];

        while ($row = $result->fetch_assoc()) {
            $content = json_decode($row["content"], true);

            // Nếu bài viết không có tiêu đề trong ngôn ngữ hiện tại, bỏ qua
            if (empty($content[$lang]["title"])) {
                continue;
            }

            $posts[] = [
                "id" => $row["id"],
                "title" => $content[$lang]["title"],
                "shortContent" => mb_substr($content[$lang]["shortContent"] ?? "", 0, 100) . "...",
                "link" => $content[$lang]["link"] ?? "#",
                "image" => "https://sahed.agu.edu.vn/" . str_replace("\\", "/", $row["image"]),
            ];
        }

        echo json_encode($posts);
    }
} elseif ($method === "POST") {
    // Nhận dữ liệu từ client
    $data = json_decode(file_get_contents("php://input"), true);
    $content = json_encode($data["content"], JSON_UNESCAPED_UNICODE);
    $image = $data["image"];

    if (!$content || !$image) {
        echo json_encode(["error" => "Thiếu dữ liệu!"]);
        exit;
    }

    // Lưu bài viết vào database
    $stmt = $mysqli->prepare("INSERT INTO Posts (content, image) VALUES (?, ?)");
    $stmt->bind_param("ss", $content, $image);
    $stmt->execute();

    echo json_encode(["message" => "Bài viết đã được thêm"]);
}
?>
