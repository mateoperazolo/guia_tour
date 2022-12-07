const menuBtn = document.querySelector('.menu .menuMovil')
const menuModal = document.querySelector('.modalMenu')
const menuContent = document.querySelector('.modalMenuContent')
menuBtn.addEventListener('click', (event) => {
    menuModal.classList.add('modalMenu--open')
    menuContent.classList.add('modalMenuContent--open')
})

const closeBtnMenu = document.getElementById('closeModalMenu')


closeBtnMenu.addEventListener('click', (event) => {
    menuModal.classList.remove('modalMenu--open')
    menuContent.classList.remove('modalMenuContent--open')
})

const modalPhotos = document.getElementById('modalArticlePicture')
const pictureBtn = document.getElementById('buttonPicture')
const closeBtnPhoto =document.getElementById('closeModalPhoto')

pictureBtn.addEventListener('click', (event) =>{
    modalPhotos.classList.add('modalPhotos--open')
})
closeBtnPhoto.addEventListener('click', (event) =>{
    modalPhotos.classList.remove('modalPhotos--open')
})


let carouselIndex = 1;
showCarousel(carouselIndex);

// Next/previous controls
function plusSlides(n) {
  showCarousel(carouselIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showCarousel(carouselIndex = n);
}

function showCarousel(n) {
  let i;
  let carousel = document.getElementsByClassName("pictureModal");
  let dots = document.getElementsByClassName("dot");
  if (n > carousel.length) {carouselIndex = 1}
  if (n < 1) {carouselIndex = carousel.length}
  for (i = 0; i < carousel.length; i++) {
    carousel[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  carousel[carouselIndex-1].style.display = "block";
  dots[carouselIndex-1].className += " active";
}














/*
const menuBtn = document.querySelector('.menu .menuMovil')
const menuModal = document.querySelector('.modalMenu')
const menuContent = document.querySelector('.modalMenuContent')

menuBtn.addEventListener('click', (event) => {
    menuModal.classList.add('modalMenu--open')
    menuContent.classList.add('modalMenuContent--open')
})

const closeBtnMenu = document.getElementById('closeModalMenu')

closeBtnMenu.addEventListener('click', (event) => {
    menuModal.classList.remove('modalMenu--open')
    menuContent.classList.remove('modalMenuContent--open')
})
const modalPhotos = document.getElementById('modalArticlePicture')
const pictureBtn = document.getElementById('buttonPicture')
const closeBtnPhoto =document.getElementById('closeModalPhoto')

pictureBtn.addEventListener('click', (event) =>{
    modalPhotos.classList.add('modalPhotos--open')
})
closeBtnPhoto.addEventListener('click', (event) =>{
    modalPhotos.classList.remove('modalPhotos--open')
}) */