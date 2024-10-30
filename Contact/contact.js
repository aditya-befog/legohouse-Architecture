const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.style.display =
    hamburger.style.display === "none" ? "block" : "none";
  close.style.display = close.style.display === "none" ? "block" : "none";
});
