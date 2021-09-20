const hamburger = document.querySelector(".main-nav-burger");
const hamburgerItem = document.querySelector(".main-nav-burger-item");

// if (hamburger) {
//   console.log("yes");
// }

hamburger.addEventListener("click", function togglebtn() {
  if (hamburgerItem.classList.contains("open")) {
    hamburgerItem.classList.remove("open");
    console.log("clicked");
  } else {
    hamburgerItem.classList.add("open");
    console.log("unclicked");
  }
});

console.log("hello world");
