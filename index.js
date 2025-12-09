console.log("js loaded"); 

let menuToggle = document.getElementById("menuToggle");
let menuOverlay = document.getElementById("menuOverlay");
let closeBtn = document.getElementById("closeBtn");

menuToggle.addEventListener("click", function() {
  menuToggle.classList.toggle("open");
  menuOverlay.classList.toggle("open");
});

closeBtn.addEventListener("click", function() {
  menuToggle.classList.remove("open");
  menuOverlay.classList.remove("open");
});

let menuLinks = menuOverlay.querySelectorAll("a");

menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    menuToggle.classList.remove("open");
    menuOverlay.classList.remove("open");
  });
});
