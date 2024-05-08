const menuicon = document.getElementById("menu-icon"); //
const menulist = document.getElementById("menu-list");

menuicon.addEventListener("click", () => {
  menulist.classList.toggle("hidden");
  console.log(menuicon.classList);
});

const text = document.querySelector(".slider .text.sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Frontend Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "UI/UX Designer";
  }, 4000);
};

textLoad();

setInterval(textLoad, 8000);

// Access the Images
let slideImages = document.querySelectorAll("img");
// Access the next and prev buttons
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
// Access the indicators
let dots = document.querySelectorAll(".dot");

var counter = 0;

// Code for next button
next.addEventListener("click", slideNext);
function slideNext() {
  slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}

// Code for prev button
prev.addEventListener("click", slidePrev);
function slidePrev() {
  slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}

function autoSliding() {
  deletInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

container.addEventListener("mouseout", autoSliding);

function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[counter].className += " active";
}

function switchImage(currentImage) {
  currentImage.classList.add("active");
  var imageId = currentImage.getAttribute("attr");
  if (imageId > counter) {
    slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = imageId;
    slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  } else if (imageId == counter) {
    return;
  } else {
    slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter = imageId;
    slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  }
  indicators();
}
