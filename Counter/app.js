const num = document.querySelector(".counter");
num.textContent = 0;
const increase = document.querySelector(".increase-button");
const decrease = document.querySelector(".decrease-button");
const reset = document.querySelector(".reset-button");

increase.addEventListener("click", function () {
  let value = num.textContent;
  value = parseInt(value) + 1;
  num.textContent = value;
});

decrease.addEventListener("click", function () {
  let value = num.textContent;
  value = parseInt(value) - 1;
  num.textContent = value;
});

reset.addEventListener("click", function () {
  num.textContent = 0;
});
