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

    $result = $mysqli->query("SELECT id, info FROM Management_board");
    $data = [];

    while ($row = $result->fetch_assoc()) {
        $info = json_decode($row["info"], true); // Chuyển JSON thành mảng
        if (isset($info[$lang])) {
            $data[] = [
                "id" => $row["id"],
                "name" => $info[$lang]["name"] ?? "",
                "position" => $info[$lang]["position"] ?? "",
                "role" => $info[$lang]["role"] ?? "",
                "group" => $info[$lang]["group"] ?? ""
            ];
        }
    }

    echo json_encode(["data" => $data], JSON_UNESCAPED_UNICODE);
}

$mysqli->close();
?>
