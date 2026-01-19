<?php
// 1. 보안 설정: 누구나 내 DB를 가져가지 못하게 주소를 체크하거나 비번을 걸 수도 있지만, 우선은 허용합니다.
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // 중요: 다른 도메인(Vercel)에서 부를 수 있게 허용

// 2. DB 연결 (기존 카페24 설정 그대로)
$host = "localhost";
$user = "nabtyman";
$pass = "povo_1530";
$dbName = "nabtyman";

$conn = mysqli_connect($host, $user, $pass, $dbName);

if (!$conn) {
    die(json_encode(["error" => "DB 연결 실패"]));
}

// 3. 데이터 가져오기 (쿼리문)
$sql = "SELECT * FROM tbl_etc ORDER BY f_sn ";
$result = mysqli_query($conn, $sql);

$news = [];
while($row = mysqli_fetch_assoc($result)) {
    // 한글 깨짐 방지를 위해 UTF-8 체크
    $news[] = $row;
}

// 4. JSON으로 출력 (Next.js가 읽기 좋은 형태)
echo json_encode($news, JSON_UNESCAPED_UNICODE);

mysqli_close($conn);
?>