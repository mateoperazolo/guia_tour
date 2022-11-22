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