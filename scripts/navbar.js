
window.onload = function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar-menu");
  
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
};
