const hamburger = document.querySelector(".main-nav-burger");
const hamburgerItem = document.querySelector(".main-nav-burger-item");
const mobileToggle = document.querySelector(".hide_for_mob");
// if (hamburger) {
//   console.log("yes");
// }

hamburger.addEventListener("click", function togglebtn() {
  if (hamburgerItem.classList.contains("open")) {
    hamburgerItem.classList.remove("open");
    mobileToggle.classList.remove("show");
  } else {
    hamburgerItem.classList.add("open");
    mobileToggle.classList.add("show");
  }
});

console.log("hello world");
