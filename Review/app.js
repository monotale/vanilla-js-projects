const reviews = [
  {
    id: 1,
    fullName: "John Smith",
    profession: "UI/UX designer",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, blanditiis minima? Voluptates repellendus quo corporis nam sint, dolorem est laudantium recusandae deserunt voluptatibus sequi eius incidunt. Eligendi est ut magni.",
  },
  {
    id: 2,
    fullName: "Ben Watkins",
    profession: "web designer",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, blanditiis minima? Voluptates repellendus quo corporis nam sint, dolorem est laudantium recusandae deserunt voluptatibus sequi eius incidunt. Eligendi est ut magni.",
  },
];

const fullName = document.querySelector(".fullname");
const profession = document.querySelector(".profession");
let img = document.querySelector(".image");
const review = document.querySelector(".review-text");

let currentItem = reviews[0];

document.addEventListener("DOMContentLoaded", function () {
  updateReview(currentItem);
});

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

buttons.forEach((element) => {
  console.log(element.className);
  element.addEventListener("click", function (e) {
    const classes = e.currentTarget.classList;
    if (classes.contains("button-left")) {
      //   console.log(classes.contains("button-left"));
      updateReview(reviews[0]);
    }
    if (classes.contains("button-right")) {
      //   console.log(classes.contains("button-right"));
      updateReview(reviews[1]);
    }
  });
});

const updateReview = (target) => {
  fullName.textContent = target.fullName;
  profession.textContent = target.profession;
  img.src = target.img;
  review.textContent = target.review;
};
