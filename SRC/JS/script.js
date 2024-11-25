document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animate-section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add visible class when in view
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the section is visible
    }
  );

  sections.forEach(section => observer.observe(section));
});
