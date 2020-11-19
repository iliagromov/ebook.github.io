const visible = function (target, element, elementClass) {
    
    // Все позиции элемента
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        // console.clear();
        // console.log('Вы видите элемент :)');
        element.classList.add(elementClass);
    } else {
        // Если элемент не видно, то запускаем этот код
        // console.clear();
        // element.classList.remove(elementClass);
    };
};

// Получаем нужный элемент

// const animated = "animated";

// const about = document.querySelector('.about');
// const aboutEl = about.querySelector('.page__text');

// const overview = document.querySelector('.overview');
// const overviewEl = overview.querySelector('.page__title-h2');

// const buy = document.querySelector('.buy');
// const buyEl = buy.querySelector('.page__title-h2');

// const info = document.querySelector('.info');

// const testimonial = document.querySelector('.testimonial');
// const testimonialEl = testimonial.querySelector('.page__title-h2');

// const contact = document.querySelector('.contact');
// const contactEl = contact.querySelector('.page__title-h2');


function animation(NodeElement, TargetElement){
    const animated = "animated";
    // Получаем нужный элемент
    const el = document.querySelector(NodeElement);
    const targetEl = TargetElement ? el.querySelector(TargetElement) : document.querySelector(NodeElement);
    visible(targetEl, el, animated);
}

function animations(){
    // Получаем нужный элемент
    animation('.about', '.page__text');
    animation('.overview', '.page__title-h2');
    animation('.buy', '.page__title-h2');
    animation('.info');
    animation('.testimonial', '.page__title-h2');
    animation('.contact', '.page__title-h2');
}
// function animation() {
    
//     visible(aboutEl, about, animated);
//     visible(overviewEl, overview, animated);
//     visible(buyEl, buy, animated);
//     visible(info, info, animated);
//     visible(testimonialEl, testimonial, animated);
//     visible(contactEl, contact, animated);

// }

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {

    animations();

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
animations();
