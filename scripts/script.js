const hamburger = document.querySelector(".hamburger");
const closeHamburger = document.querySelector(".hamburger--close");
const sideBar = document.querySelector(".sidebar");
const mobileNavCloseSidebar = document.querySelectorAll(".nav__close__sidebar");
const contactBtn = document.querySelector(".contact__btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const pageProgressBar = document.querySelector(".progress-bar");
const modalBtnClose = document.querySelector(".modal__btn--close");
const showOnPx = 100;
const backToTopButton = document.querySelector(".back--to--top");

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
// SIDEBAR EVENTS
//________________________________________________________________
// SCROLL TO TOP EVENTS
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
// SCROLL TO TOP EVENTS
//________________________________________________________________
// MODAL
const openModal = () => {
  modal.classList.remove("modal__hidden");
  overlay.classList.remove("overlay__hidden");
};
const closeModal = () => {
  modal.classList.add("modal__hidden");
  overlay.classList.add("overlay__hidden");
};

document.addEventListener("keydown", (e) => {
  if (e.key === `Escape`) {
    modal.classList.add("modal__hidden");
    overlay.classList.add("overlay__hidden");
  }
});

contactBtn.addEventListener("click", openModal);
modalBtnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// MODAL
