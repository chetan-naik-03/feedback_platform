const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("rating");

stars.forEach(star => {
    star.addEventListener("click", () => {
        const value = star.getAttribute("data-value");
        ratingInput.value = value;

        stars.forEach(s => s.classList.remove("active"));
        for (let i = 0; i < value; i++) {
            stars[i].classList.add("active");
        }
    });
});

const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const rating = ratingInput.value;

    if (name === "" || message === "") {
        alert("Please fill all required fields");
        return;
    }

    if (rating === "") {
        alert("Please select a star rating");
        return;
    }

    // Next phase: AJAX will go here
    alert("Validation passed (AJAX next)");
});
