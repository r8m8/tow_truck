const blockClassName = ".main-content__block";

const observerOptions = {
  root: null,
  rootMargin: "20px",
  threshold: 1.0,

  trackVisibility: true,
  delay: 100,
};

const checkInView = (entries) => {
  console.log("entries: ", entries);
  console.log("her");
  entries.map((entry) => {
    console.log("entry: ", entry);
    if (entry.isVisible) {
      entry.target.className = blockClassName + " red";
    } else {
      entry.target.className = blockClassName + " blue";
    }
  });
};
const observer = new IntersectionObserver(checkInView, observerOptions);

const blocks = document.querySelectorAll(blockClassName);
blocks.forEach((block) => observer.observe(block));
