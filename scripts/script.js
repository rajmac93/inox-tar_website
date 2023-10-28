const hamburger = document.querySelector(".hamburger");
const closeHamburger = document.querySelector(".hamburger--close");
const sideBar = document.querySelector(".sidebar");
const mobileNavCloseSidebar = document.querySelectorAll(".nav__close__sidebar");

hamburger.addEventListener("click", function () {
  sideBar.style.display = "flex";
});

closeHamburger.addEventListener("click", function () {
  sideBar.style.display = "none";
});

mobileNavCloseSidebar.forEach((el) => {
  el.addEventListener("click", function () {
    sideBar.style.display = "none";
  });
});

const showOnPx = 100;
const backToTopButton = document.querySelector(".back--to--top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("back--to--top__hidden");
  } else {
    backToTopButton.classList.add("back--to--top__hidden");
  }
});
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};
backToTopButton.addEventListener("click", goToTop);

const pageProgressBar = document.querySelector(".progress-bar");
document.addEventListener("scroll", () => {
  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});
