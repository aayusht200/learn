const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("keyup", () => onClick(button));
});

function onClick(button) {
  alert(button.id);
}
