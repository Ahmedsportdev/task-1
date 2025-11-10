const observed = document.querySelectorAll(".observe");
const detailsElements = document.querySelectorAll("details");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add(entry.target.dataset.class);
    }
  });
});

detailsElements.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      observed.forEach((el) => observer.observe(el));
    }
  });
});
