<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Public Feedback Platform</title>
     <link rel="stylesheet" href="assets/css/style.css?v=2">
</head>
<body>

<div class="container">

    <h2>Public Feedback & Review</h2>

    <!-- Feedback Form -->
    <div class="feedback-form">
        <h3>Submit Your Feedback</h3>

        <form id="feedbackForm">
            <input type="text" id="name" placeholder="Your Name" required>
            <input type="email" id="email" placeholder="Your Email (optional)">
            
            <!-- Star Rating -->
            <div class="stars">
                <span class="star" data-value="1">★</span>
                <span class="star" data-value="2">★</span>
                <span class="star" data-value="3">★</span>
                <span class="star" data-value="4">★</span>
                <span class="star" data-value="5">★</span>
            </div>

            <input type="hidden" id="rating">

            <textarea id="message" placeholder="Write your feedback..." required></textarea>

            <button type="submit">Submit Feedback</button>
        </form>
    </div>

    <!-- Feedback List -->
    <div class="feedback-list">
        <h3>Recent Feedbacks</h3>

        <div id="feedbackContainer">
            <!-- Feedback cards will appear here -->
        </div>

        <button id="loadMore">Load More</button>
    </div>

</div>

<script src="assets/js/script.js"></script>
</body>
</html>

