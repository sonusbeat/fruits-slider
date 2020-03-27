const slider = document.querySelector('#slider');
const slides = document.querySelector('.slider-items').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const totalSlides = slides.length;
let index = 0;

window.onload = function() {
    let timer = setInterval(function () {
        move('next');
    }, 4000);

    slider.addEventListener('mouseover', function () {
        clearInterval(timer);
    });

    slider.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            move('next');
        }, 3000)
    });

};

next.addEventListener('click', function() {
    move('next');
});

prev.addEventListener('click', function() {
    move('prev');
});

function move(direction) {

    switch (direction) {
        case 'next':
            index++;

            if (index === totalSlides) {
                index = 0;
            }

            break;
            
        case 'prev':
            if (index == 0) {
                index = totalSlides-1;
            } else {
                index--;
            }

            break;
    }

    for(let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active');
    }

    slides[index].classList.add('active');
}