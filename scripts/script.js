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
const html = document.querySelector("html");

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
  const show = scrollContainer().scrollTop > showOnPx;
  backToTopButton.classList.toggle("back--to--top__hidden", !show);
  backToTopButton.style.display = show ? "block" : "none";
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
});
// SCROLL TO TOP EVENTS
//________________________________________________________________
// MODAL

const toggleModal = (open) => {
  modal.classList.toggle("modal__hidden", !open);
  overlay.classList.toggle("overlay__hidden", !open);
  html.style.overflow = open ? "hidden" : "auto";
};

document.addEventListener("keydown", (e) => {
  if (e.key === `Escape`) toggleModal(false);
});

contactBtn.addEventListener("click", () => toggleModal(true));
modalBtnClose.addEventListener("click", () => toggleModal(false));
overlay.addEventListener("click", () => toggleModal(false));
// MODAL
