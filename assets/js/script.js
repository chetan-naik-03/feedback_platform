const form = document.getElementById("feedbackForm");

let offset = 0;
const limit = 5;
const feedbackContainer = document.getElementById("feedbackContainer");
const loadMoreBtn = document.getElementById("loadMore");

/* ================= SUBMIT FEEDBACK ================= */

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

            /* 🔁 REFRESH FEEDBACK LIST */
            offset = 0;
            feedbackContainer.innerHTML = "";
            loadMoreBtn.style.display = "block";
            loadFeedbacks();

        } else {
            alert("Something went wrong");
        }
    });
});

/* ================= FETCH FEEDBACKS ================= */

function loadFeedbacks() {
    const formData = new FormData();
    formData.append("offset", offset);

    fetch("fetch_feedback.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        if (data.trim() === "") {
            loadMoreBtn.style.display = "none";
            return;
        }

        feedbackContainer.insertAdjacentHTML("beforeend", data);
        offset += limit;
    });
}

/* Load feedbacks on page load */
loadFeedbacks();

/* Load more button */
loadMoreBtn.addEventListener("click", loadFeedbacks);
