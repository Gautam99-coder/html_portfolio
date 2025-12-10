// Select all elements we want to reveal
const revealElements = document.querySelectorAll(".reveal");

// Create an observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Optional: stop observing once visible
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2 // 20% of element visible → trigger
  }
);

// Attach observer to each element
revealElements.forEach(el => observer.observe(el));
