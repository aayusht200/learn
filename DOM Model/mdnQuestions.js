const sect = document.createElement("section");
const para = document.createElement("p");
para.textContent = "This is the text Content assigned to P Element";
sect.appendChild(para);
const body = document.querySelector("body");
body.appendChild(sect);
sect.classList.add("special");
sect.removeChild(para);
const btn = document.createElement("button");
btn.textContent = "Click Me";
body.appendChild(btn);

body.style.backgroundColor = "Black";

const heading = document.querySelectorAll("h3");
heading.forEach((head) => {
  head.style.color = "White";
});
const solution = document.querySelectorAll(".solution");
btn.addEventListener("click", () => {
  solution.forEach((show) => {
    show.classList.toggle("solution-show");
  });
});
