<?php
require_once "includes/db.php";

$limit = 5;
$offset = isset($_POST['offset']) ? (int)$_POST['offset'] : 0;

$query = "SELECT * FROM feedbacks 
          ORDER BY id DESC 
          LIMIT $limit OFFSET $offset";

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {

        echo '<div class="feedback-card">';
        echo '<strong>' . htmlspecialchars($row['name']) . '</strong><br>';

        // Star display
        for ($i = 1; $i <= 5; $i++) {
            echo $i <= $row['rating'] ? '⭐' : '☆';
        }

        echo '<p>' . htmlspecialchars($row['message']) . '</p>';
        echo '<small>' . $row['created_at'] . '</small>';
        echo '</div>';
    }
} else {
    echo "";
}
?>
