let output = document.querySelector(".output");
let buttons = document.querySelectorAll(".button");
let evaluate = document.querySelector("#eval");
let Ac = document.querySelector("#Ac");
let Dc = document.querySelector("#Dc");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    output.value += button.value;
  });
});
evaluate.addEventListener("click", () => {
  if (output.value === "") {
    evaluate.setAttribute = "disabled";
  } else {
    try {
      output.value = eval(output.value);
    } catch (error) {
      output.value = "";
    }
  }
});
Ac.addEventListener("click", () => {
  output.value = "";
});
Dc.addEventListener("click", () => {
  output.value = output.value.slice(0, -1);
});
