const images = document.querySelectorAll('.number-picture');
let currentIteration = 0;
let lastImageName = '';
let askNumber;

function renderImages() {
    const container = document.getElementById('imageContainer');

    images.forEach((image) => {
        // Clone the image element and append it to the container
        const clonedImage = image.cloneNode(true);
        container.appendChild(clonedImage);
    });
}
// Use window.onload to make sure the DOM is fully loaded
window.onload = function () {
    askNumber = prompt('What is your favorite number?');
    // Start the randomBrightnessLoop after the user has entered their favorite number
    randomBrightnessLoop();
};
function resetIteration() {
  currentIteration = 0;
}

function openModal() {
  const modal = $('#myModal');
  const modalContent = modal.find('.modal-content');

  const contentToShow = `Congrats! ${lastImageName} `;
  modalContent.html(contentToShow);

  modal.css({
    'display': 'block',
    'z-index': '999',
  });

  setTimeout(() => {
    modal.css({
      'transform': 'translateY(0)'
    });

    $('body').addClass('overlay');
  }, 50); 
}

function resetModalContent() {
    const modal = $('#myModal');
    const modalContent = modal.find('.modal-content');
    
    // Clear the content
    modalContent.empty();

    // Append the close button
    modalContent.append('<span class="close">&times;</span>');

    // Apply styles to the close button
    const closeButton = modal.find('.close');
    closeButton.css({
        position: 'absolute',
        top: '-80px',
        right: '15px',
        fontSize: '.9em',
        fontWeight: 'lighter',
        cursor: 'pointer',
        color: '#119dff',
        transition: '.5s'
    });
}


function closeModal() {
  const modal = $('#myModal');
  const modalContent = modal.find('.modal-content');

  modal.css({
    'transform': 'translateY(-300%)'
  });

  setTimeout(function () {
    $('body').removeClass('overlay');
  }, 300);

  // Clear modal content after the transition is complete
  setTimeout(function () {
    modal.css({
      'display': 'none'
    });
setTimeout(function () {
    resetModalContent();
}, 200);
        
  }, 600); // Adjust the delay based on your transition duration
}

// Close modal on close button click using event delegation
$(document).on('click', '.close', function () {
  closeModal();
});

// Close modal on overlay click using event delegation
$(document).on('click', '.overlay', function () {
  closeModal();
});

function resetImagesBright() {

  images.forEach((image) => {
    image.style.filter = 'brightness(100%)';
  });

  // Reset modal position
  const modal = $('#myModal');
  const modalContent = modal.find('.modal-content');

  modal.css({
    'transform': 'translateY(-100%)'
  });
  modalContent.css({
    left: '0%'
  });

}

function resetImages() {
  images.forEach((image) => {
    image.style.filter = 'brightness(30%)';
  });
}

function randomBrightnessLoop() {
    resetImages();

    // Filter out the 'poy' image from eligible images
    const eligibleImages = Array.from(images).filter(image => image.getAttribute('alt') !== 'poy');

    if (eligibleImages.length === 0) {
        console.error("No eligible images found excluding 'poy'.");
        return; // Exit the function if there are no eligible images
    }

    const randomIndex = Math.floor(Math.random() * eligibleImages.length);
    const currentImage = eligibleImages[randomIndex];
    const currentAlt = currentImage.getAttribute('alt');

    currentImage.style.filter = 'brightness(100%)';
    lastImageName = currentAlt;

    // Calculate the timeout delay based on the current iteration
    const maxIterations = askNumber;
    const initialDelay = 200;
    const maxDelay = 1500;

    const slowdownStartPercentage = 0.85; // Start slowing down after 85% of the iterations

    // Apply a custom easing to slow down towards the end
    const customEasing = (t) => 1 - Math.pow(1 - t, 2); // Ease-out function

    const delay = initialDelay + customEasing(currentIteration / maxIterations) * (maxDelay - initialDelay);

    setTimeout(() => {
        resetImagesBright();
        currentIteration++;

        if (currentIteration < maxIterations) {
            randomBrightnessLoop();
        } else {
            currentIteration = 0;
            // Check if the last image is 'poy' and skip it
            if (lastImageName !== 'Poy') {
                setTimeout(() => {
                    openModal();
                }, 500);
            } else {
                // If 'poy', call the function again
                randomBrightnessLoop();
            }
        }
    }, currentIteration === maxIterations - 1 ? delay * 1.8 : delay);
}
