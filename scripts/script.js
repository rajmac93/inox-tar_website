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
  console.log(el);
});
