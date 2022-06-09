const reviews = [
  {
    id: 1,
    fullName: "John Smith",
    profession: "UI/UX designer",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    review:
      "L consectetur adipisicing elit. Rem, blanditiis minima? Voluptates repellendus quo corporis nam sint, dolorem est laudantium recusandae deserunt voluptatibus sequi eius incidunt. Eligendi est ut magni.",
  },
  {
    id: 2,
    fullName: "Ben Watkins",
    profession: "web designer",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    review:
      "Nam sint, dolorem est laudantium recusandae deserunt voluptatibus sequi eius incidunt. Eligendi est ut magni.",
  },
  {
    id: 3,
    fullName: "Mari Robertson",
    profession: "product owner",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, blanditiis minima? Voluptates repellendus quo corporis nam sint, dolorem est laudantium recusandae deserunt voluptatibus sequi eius incidunt. Eligendi est ut magni.",
  },
  {
    id: 4,
    fullName: "Grag Mikkelson",
    profession: "back-end developer",
    img: "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Remt magni.",
  },
  {
    id: 5,
    fullName: "Julia Assange",
    profession: "analyst",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    review:
      "Lorem ipsum dot, dolorem est laudantium recusandae deserunt voluptatibus sequi eius incidunt. Eligendi est ut magni.",
  },
  {
    id: 6,
    fullName: "Mick Matters",
    profession: "front-end developer",
    img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    review:
      "Lorem ilanditiis minima? Voluptates repellendus quo corporis nam sint, dolorem est laudantium recusandae deserunt voluptatibus sequi eius incidunt. Eligendi est ut magni.",
  },
];

const fullName = document.querySelector(".fullname");
const profession = document.querySelector(".profession");
const img = document.querySelector(".image");
const review = document.querySelector(".review-text");
const buttons = document.querySelectorAll(".btn");
const random = document.querySelector(".random-btn");

let currentPosition = 0;

document.addEventListener("DOMContentLoaded", function () {
  updateReview(reviews[currentPosition]);
});

buttons.forEach((element) => {
  element.addEventListener("click", function (e) {
    const classes = e.currentTarget.classList;

    if (classes.contains("button-left")) {
      if (currentPosition > 0) updateReview(reviews[(currentPosition -= 1)]);
    }
    if (classes.contains("button-right")) {
      if (currentPosition < reviews.length - 1)
        updateReview(reviews[(currentPosition += 1)]);
    }
  });
});

const updateReview = (target) => {
  fullName.textContent = target.fullName;
  profession.textContent = target.profession;
  img.src = target.img;
  review.textContent = target.review;
};

const randomReview = () => {
  return Math.floor(Math.random() * reviews.length);
};

random.addEventListener("click", function () {
  updateReview(reviews[randomReview()]);
});
