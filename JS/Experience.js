document.addEventListener("DOMContentLoaded", function () {
    const timelineContainers = document.querySelectorAll(".timeline-container");

    function revealCards() {
        timelineContainers.forEach((container) => {
            const position = container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (position < windowHeight - 100) {
                container.classList.add("show");
            }
        });
    }

    revealCards();
    window.addEventListener("scroll", revealCards);
});
