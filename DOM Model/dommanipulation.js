const header = document.getElementsByClassName("dom-header");
console.log(header[0]);

const sect = document.createElement("section");
sect.classList.add("container");

const headerTwo = document.createElement("h2");
headerTwo.textContent = "Welcome to my site!";
sect.appendChild(headerTwo);

const content = document.querySelector(".dom");
content.appendChild(sect);

// content.style.backgroundColor = "#f0f0f0";
sect.style.padding = "2rem";

const btn = document.createElement("button");
btn.textContent = "Toogle Theme";
sect.appendChild(btn);

btn.addEventListener("click", () => {
  content.classList.toggle("dark-theme");
  if (headerTwo.textContent === "Welcome to my site!") {
    headerTwo.textContent = "You toggled the theme!";
  } else {
    headerTwo.textContent = "Welcome to my site!";
  }
});

const removedPara = document.createElement("p");
removedPara.textContent = "This content will be removed";
sect.appendChild(removedPara);

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     removedPara.classList.toggle("removed-para");
//   }, 2000);
// });
removedPara.classList.add("removed-para");
function see() {
  removedPara.classList.toggle("removed-para");
  removedPara.classList.toggle("shown-para");
  setTimeout(see, 2000);
}
window.addEventListener("load", () => {
  setTimeout(see, 2000);
});
