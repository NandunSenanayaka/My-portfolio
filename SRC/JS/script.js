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





  // JavaScript to toggle between the two project categories
  document.addEventListener("DOMContentLoaded", () => {
    const uniProjectsButton = document.getElementById("uni-projects");
    const uiuxDesignButton = document.getElementById("uiux-design");
    const graphicDesignButton = document.getElementById("graphic-design");
  
    const uniProjectsSection = document.getElementById("uni-projects-section");
    const uiuxDesignSection = document.getElementById("uiux-design-section");
    const graphicDesignSection = document.getElementById("graphic-design-section");
  
    uniProjectsButton.addEventListener("click", () => {
      uniProjectsSection.classList.remove("hidden");
      uiuxDesignSection.classList.add("hidden");
      graphicDesignSection.classList.add("hidden");
    });
  
    uiuxDesignButton.addEventListener("click", () => {
      uniProjectsSection.classList.add("hidden");
      uiuxDesignSection.classList.remove("hidden");
      graphicDesignSection.classList.add("hidden");
    });
  
    graphicDesignButton.addEventListener("click", () => {
      uniProjectsSection.classList.add("hidden");
      uiuxDesignSection.classList.add("hidden");
      graphicDesignSection.classList.remove("hidden");
    });
  });
  
  





