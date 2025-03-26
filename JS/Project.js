document.addEventListener("DOMContentLoaded", function () {
    const projectSection = document.getElementById("projects-section"); 
    const projectItems = document.querySelectorAll(".project-item");
    const allButtons = document.querySelectorAll(".project-button");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom > 0
        );
    }

    function revealProjects() {
        if (isInViewport(projectSection)) { 
            projectItems.forEach((item) => {
                const position = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (position < windowHeight - 100) {
                    item.classList.add("show");
                }
            });
        }
    }

    function filterProjects(className) {
        if (!isInViewport(projectSection)) return; 

        // Filter project items
        projectItems.forEach((item) => {
            item.classList.remove("show");
            if (className === "all") {
                item.style.display = "block";
                setTimeout(() => item.classList.add("show"), 100);
            } else {
                if (item.classList.contains(className)) {
                    item.style.display = "block";
                    setTimeout(() => item.classList.add("show"), 100);
                } else {
                    item.style.display = "none";
                }
            }
        });

        // Highlight active button
        allButtons.forEach((btn) => {
            btn.classList.remove("active-filter");
            if (btn.textContent.trim().toLowerCase() === className.toLowerCase()) {
                btn.classList.add("active-filter");
            }
        });
    }

    window.addEventListener("scroll", revealProjects);
    filterProjects("all");
    revealProjects();

    window.filterProjects = filterProjects;
});
