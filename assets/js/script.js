const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const rating = document.getElementById("rating").value;

    if (name === "" || message === "") {
        alert("Please fill all required fields");
        return;
    }

    if (rating === "") {
        alert("Please select a star rating");
        return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("rating", rating);

    fetch("submit_feedback.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        if (data === "success") {
            alert("Feedback submitted successfully!");
            form.reset();
            document.querySelectorAll(".star").forEach(s => s.classList.remove("active"));
        } else {
            alert("Something went wrong");
        }
    });
});
