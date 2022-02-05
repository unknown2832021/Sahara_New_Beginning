/*====================================================================
          Typing text start here
=====================================================================*/

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = [
  "Permanent Accommodation for Contractors",
  "Located in Fahud & Nimr",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
// Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
/*====================================================================
          Typing text end here
=====================================================================*/
/*====================================================================
          Founders slider start here
=====================================================================*/
let slide = document.querySelectorAll(".image");
let slideArray = Array.from(slide);

function prevnext() {
  let currentSlide = document.querySelector(".activex");
  let currentSlideIndex = slideArray.indexOf(currentSlide);

  let prev;
  let next;

  if (currentSlideIndex == 0) {
    prev = slideArray[slideArray.length - 1];
  } else {
    prev = slideArray[currentSlideIndex - 1];
  }

  if (currentSlideIndex == slideArray.length - 1) {
    next = slideArray[0];
  } else {
    next = slideArray[currentSlideIndex + 1];
  }
  return { prev, next };
}
function sliding() {
  let currentSlide = document.querySelector(".activex");
  let currentSlideIndex = slideArray.indexOf(currentSlide);
  let { prev, next } = prevnext();

  //   ===============Texting part start here==============
  let textTitle = document.querySelector(".textTitle");
  let activeImage = document.querySelector(".image.activex");
  let textdes = document.querySelector(".textdes");

  if (slideArray.indexOf(currentSlide) == slideArray.indexOf(currentSlide)) {
    textTitle.innerHTML = activeImage.dataset.inn;
    // "Founders name - " + (slideArray.indexOf(currentSlide) + 1);
    // textdes.innerHTML = activeImage.dataset.inn;
  }
  //   ===============Texting part end here==============

  slideArray.map((image, index) => {
    if (currentSlideIndex == index) {
      image.style.transform = "translateX(0)";
    } else if (image == prev) {
      image.style.transform = "translateX(-100%)";
    } else if (image == next) {
      image.style.transform = "translateX(100%)";
    }
    image.addEventListener("transitionend", function () {
      image.classList.remove("smooth");
    });
  });
}
sliding();

let prevbutton = document.querySelector(".prev");
let nextbutton = document.querySelector(".next");

prevbutton.addEventListener("click", function () {
  let currentSlide = document.querySelector(".activex");
  clearInterval(stop);
  let { prev } = prevnext();

  currentSlide.classList.add("smooth");
  prev.classList.add("smooth");
  currentSlide.classList.remove("activex");
  currentSlide.style.transform = "translate(100%)";
  prev.classList.add("activex");
  prev.style.transform = "translate(0)";
  sliding();
});

nextbutton.addEventListener("click", function () {
  let currentSlide = document.querySelector(".activex");

  clearInterval(stop);
  let { next } = prevnext();

  currentSlide.classList.add("smooth");
  next.classList.add("smooth");
  currentSlide.classList.remove("activex");
  currentSlide.style.transform = "translateX(-100%)";
  next.classList.add("activex");
  next.style.transform = "translateX(0)";
  sliding();
});

function autoPlay() {
  let currentSlide = document.querySelector(".activex");

  let { next } = prevnext();

  currentSlide.classList.add("smooth");
  next.classList.add("smooth");
  currentSlide.classList.remove("activex");
  currentSlide.style.transform = "translateX(-100%)";
  next.classList.add("activex");
  next.style.transform = "translateX(0)";
  sliding();
}
let stop = setInterval(function () {
  autoPlay();
}, 3000);

/*====================================================================
          Founders slider end here
=====================================================================*/
