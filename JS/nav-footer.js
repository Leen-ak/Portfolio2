document.addEventListener("DOMContentLoaded", function () {
    fetch("HTML/navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        });

    fetch("HTML/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});
