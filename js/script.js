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

let slideImages = document.querySelectorAll('img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');

var counter = 0;

next.addEventListener('click', slideNext);

function slideNext() {
  slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
  slideImages[counter].style.removeProperty('animation'); // Menghapus animasi pada gambar sebelumnya
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
}
