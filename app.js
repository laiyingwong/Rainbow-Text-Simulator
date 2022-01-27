const body = document.querySelector("body");
const rainbow = document.querySelector(".rainbow");
const letters = document.querySelectorAll("span");
const stormImg = document.querySelector(".storm");
const rainbowImg = document.createElement("img");
rainbowImg.src = "images/rainbow-unsplash.jpg";

const colors = [
  "red",
  "orange",
  "yellow",
  "lightgreen",
  "lightblue",
  "plum",
  "violet",
];

rainbow.addEventListener("mouseenter", function () {
  rainbow.classList.add("rainbow_font");
  letters.forEach((letter, index) => (letter.style.color = colors[index]));
  stormImg.remove();
  body.prepend(rainbowImg);

  setTimeout(function () {
    rainbow.classList.remove("rainbow_font");
    letters.forEach((letter, index) => (letter.style.color = ""));
    rainbowImg.remove();
    body.prepend(stormImg);
  }, 2500);
});
