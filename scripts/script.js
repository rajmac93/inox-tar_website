const hamburger = document.querySelector(".hamburger");
const closeHamburger = document.querySelector(".hamburger--close");
const sideBar = document.querySelector(".sidebar");

hamburger.addEventListener("click", function () {
  console.log("asd");
  sideBar.style.display = "flex";
});
closeHamburger.addEventListener("click", function () {
  console.log("asd");
  sideBar.style.display = "none";
});
