document.addEventListener("DOMContentLoaded", function() {
    const skillCircles = document.querySelectorAll('.circle');

    const observerOptions = {
        root: null, // Default is the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    function onIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }

    const observer = new IntersectionObserver(onIntersection, observerOptions);

    skillCircles.forEach(circle => {
        observer.observe(circle);
    });
});
