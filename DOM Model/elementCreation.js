// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.style.backgroundColor = "red";
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("para");
para.style.color = "red";
para.textContent = "Hey  i am red";
container.appendChild(para);

const header = document.createElement("h3");
header.classList.add("header");
header.style.color = "blue";
header.textContent = "I am  blue h3";
container.appendChild(header);

const divTwo = document.createElement("div");
divTwo.classList.add("divTwo");
divTwo.style.backgroundColor = "pink";
container.appendChild(divTwo);

const headerTwo = document.createElement("h3");
headerTwo.classList.add("headerTwo");
headerTwo.textContent = "I am  in the div";
divTwo.appendChild(headerTwo);

const paraTwo = document.createElement("p");
paraTwo.classList.add("paraTwo");
paraTwo.textContent = "Me Too!";
divTwo.appendChild(paraTwo);
