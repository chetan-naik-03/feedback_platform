<?php
require_once "includes/db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));
    $rating = (int) $_POST["rating"];

    if ($name === "" || $message === "" || $rating < 1 || $rating > 5) {
        echo "error";
        exit;
    }

    $stmt = mysqli_prepare(
        $conn,
        "INSERT INTO feedbacks (name, email, rating, message) VALUES (?, ?, ?, ?)"
    );

    mysqli_stmt_bind_param($stmt, "ssis", $name, $email, $rating, $message);

    if (mysqli_stmt_execute($stmt)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
