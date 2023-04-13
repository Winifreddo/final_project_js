// section 2 and 5 image animation

const animation = document.querySelectorAll(".animate");
const options = {
  threshold: 0,
  rootMargin: "0px 0px -400px 0px",
};
const animateScroll = new IntersectionObserver(function (
  entries,
  animateScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      animateScroll.unobserve(entry.target);
    }
  });
},
options);

animation.forEach((animation) => {
  animateScroll.observe(animation);
});

// section 3 image carousel

const carousel = document.querySelector(".carousel");
const card = carousel.querySelector(".card");
const goLeft = document.querySelector(".goLeft");
const goRight = document.querySelector(".goRight");

const carouselWidth = carousel.offsetWidth;
const cardStyling = window.getComputedStyle(card);
const marginInt = parseInt(cardStyling.marginRight.match(/\d+/g)[0]);

const totalCards = carousel.querySelectorAll("[data-target='card']").length;

let i = 0;
-(
  (totalCards / 3) * carouselWidth +
  marginInt * (totalCards / 3) -
  carouselWidth -
  marginInt
);
const translate = -(
  (totalCards / 3) * carouselWidth +
  marginInt * (totalCards / 3) -
  carouselWidth -
  marginInt
);

// console.log(translate);

// 1 x 1398 + 16 x 1 - 16

goLeft.addEventListener("click", function () {
  if (i !== 0) {
    i += carouselWidth + marginInt;
    carousel.style.transform = `translateX(${i}px)`;
  }
});

goRight.addEventListener("click", function () {
  if (i !== translate) {
    i -= carouselWidth + marginInt;
    carousel.style.transform = `translateX(${i}px)`;
  }
});

// section 6 dynamic image gallery 

// const images = document.getElementById("vase-images");
// const imageSelection = document.getElementById("imageSelection");
// const popup = document.getElementById("popup");
// const info = document.getElementById("info");
// const imageArray = [1, 2, 3, 4];
// const selectedIndex = null;

// imageArray.forEach((x) => {
//   const newImage = document.createElement("img");
//   newImage.src = `./CSS/images/vase-${x}.jpg`;
//   newImage.alt = `vases`;
//   newImage.classList.add(`imgStyle${x}`);
//   newImage.addEventListener("click", (e) => {
//     popup.style.transform = `translatey(0)`;
//     imageSelection.src = `./CSSimages/vase-${x}.jpg`;
//   });
//   images.appendChild(newImage);
// });

// popup.addEventListener("click", (x) => {
//   popup.style.transform = `translatey(-100%)`;
//   popup.src = "";
//   popup.alt = "";
// })

// section 7 image carousel

