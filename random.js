import {$ , jQuery} from "jquery";
window.jQuery = $;
window.$ = $;
const images = document.querySelectorAll('.number-picture');
let currentIteration = 0;
let lastImageName = '';


function resetIteration() {
    currentIteration = 0;
}
function openModal(content) {
  const modal = document.getElementById('myModal');
  const modalContent = document.getElementById('modalContent');

  modal.style.display = 'block';
  modalContent.innerHTML = lastImageName;
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}
function randomBrightnessLoop() {
    
    resetImages();
    const randomIndex = Math.floor(Math.random() * images.length);

    images[randomIndex].style.filter = 'brightness(100%)';
    lastImageName = images[randomIndex].getAttribute('alt');

    setTimeout(() => {
      resetImagesBright();
        currentIteration++;

        if (currentIteration < 15) {
            randomBrightnessLoop();
        } else {
            currentIteration = 0;
            setTimeout(() => {
              openModal();
          }, 200);
        }
    }, 200);
}

function resetImagesBright() {
  images.forEach((image) => {
      image.style.filter = 'brightness(100%)';
  });
}
function resetImages() {
  images.forEach((image) => {
      image.style.filter = 'brightness(30%)';
  });
}

(() => { 
  const   button = $('#btn');
  const   popup_window = $('.popup');
  const   close_button = popup_window.find('.close');

  button.on('click',()=>{
      popup_window.css({
      'transform':'translateY(0)',
      'z-index':'999'
    });
      $('body').addClass('overlay');
      popup_window.find('h1').animate({
         left:'0'
      },900);
      $(this).css({
        'z-index':'-1'
      });
  });
  
  close_button.on('click',() =>{
       $(this).parent('.popup').css({
          'transform':'translateY(-300%)'
       });
     
       $('body').removeClass('overlay');
       $(this).parent('.popup').siblings('.btn').css({
            'z-index':'1'
       });
      });
  
})();
