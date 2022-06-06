const num = document.querySelector(".counter");
num.textContent = 0;
const increase = document.querySelector(".increase-button");
const decrease = document.querySelector(".decrease-button");
const reset = document.querySelector(".reset-button");

//увеличить на 1
increase.addEventListener("click", function () {
  let value = num.textContent;
  value = parseInt(value) + 1;
  changeColor(value);
  num.textContent = value;
});

//уменьшить на 1
decrease.addEventListener("click", function () {
  let value = num.textContent;
  value = parseInt(value) - 1;
  changeColor(value);
  num.textContent = value;
});

//обнулить
reset.addEventListener("click", function () {
  num.textContent = 0;
  let value = num.textContent;
  changeColor(value);
});

//изменение цвета
function changeColor(value) {
  if (parseInt(value) === 0) {
    document.querySelector(".counter").style.color = "#000000";
  }
  if (parseInt(value) > 0) {
    document.querySelector(".counter").style.color = "#00887A";
  }
  if (parseInt(value) < 0) {
    document.querySelector(".counter").style.color = "#E85A4F";
  }
}
