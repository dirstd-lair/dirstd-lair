const orderButton = document.querySelector('.button-orders');
const linkImageButton = document.querySelector('.link-image-button');
const elementsToHide = document.querySelectorAll('.container-answer, .container-menu-answer, .cont-buttons-answer, .container-info-avtor, .container-texts, .social-button');



orderButton.addEventListener('click', function(event) {
    const modalElement = document.querySelector('.container-answer');
    const modalElement_1 = document.querySelector('.global-box-answer');
    event.preventDefault();


    modalElement.style.visibility = 'visible';
    modalElement_1.style.visibility = 'visible';
    modalElement.style.animation = 'answer-animation 1s';




});

linkImageButton.addEventListener('click', function(event) {
    const modalElement = document.querySelector('.container-answer');
    const modalElement_1 = document.querySelector('.global-box-answer');
    event.preventDefault();


    modalElement_1.style.visibility = 'hidden';
    modalElement.style.position = "absolute"
    modalElement.style.animation = 'skip-animation 1s forwards';


});
const startTime = performance.now();
        window.onload = function() {

            const endTime = performance.now(); 
            const elapsedTime = endTime - startTime; 
            const preloader = document.querySelector('.preloader');
            console.log(elapsedTime)
            if (elapsedTime > 500) {
                
                if (preloader) { 
                   preloader.classList.add('fade-out');

                   setTimeout(() => {
                      preloader.remove(); 
                   }, 1000); 
                }
             }
            else {
                preloader.remove();
            }
        }

