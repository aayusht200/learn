const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => onClick(button));
});

function onClick(button) {
  alert(button.id);
}
