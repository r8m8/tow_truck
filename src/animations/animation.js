// const checkIntersectionObserver = () => {
//   if (typeof window == undefined && !window.IntersectionObserver) {
//     return false;
//   }
//   return true;
// };

// checkIntersectionObserver();

const blockClassName = "main-content__block";

const observerOptions = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
};

const checkInView = (entries) => {
  entries.map((entry) => {
    if (entry.intersectionRatio !== 0) {
      entry.target.className = blockClassName + " red";
    } else {
      entry.target.className = blockClassName + " blue";
    }
  });
};
const observer = new IntersectionObserver(checkInView, observerOptions);

const blocks = document.querySelectorAll("." + blockClassName);
blocks.forEach((block) => observer.observe(block));
