// main slider parametrs
const sliderSize = document.querySelectorAll('.slideitem');
const parent = document.querySelector('.slider-wrap');
// How many of slider we have
let LenghtSlider = sliderSize.length;
// control width of screen 
let widthCheck = document.documentElement.clientWidth;
// default patametrs for slide place and animation trigger
let place = 1;
let triggerInfo = "";
// text description parametrs
const slideDesc = document.querySelectorAll('.item_d');
// check if size of description the same as the size of main slide
if (sliderSize.length != slideDesc.length) {
    alert('something wrong');
}
// check what width size of screem 
function widthFunction() {
    widthCheck = document.documentElement.clientWidth;
    place = widthCheck > 0 && widthCheck < 576 ? 1 : (widthCheck > 576 && widthCheck < 1200 ? 2 : 3);
    startPosition();
}
// Sort and add order number to element
function startPosition() {
    sliderSize.forEach((slide, i) => {
        const order = i < place ? i : i + 1;
        slide.style.order = slideDesc[i].style.order = `${order}`;
        removeClass(slide, slideDesc[i]);
    });
    sliderSize[0].style.order = slideDesc[0].style.order = `${place}`;
}
// keypress listner
document.addEventListener('keydown', (event) => {
    triggerInfo = event.key;
    switch (triggerInfo) {
        case "ArrowLeft":
            MoveBack();
            break;
        case "ArrowRight":
            MoveForward();
            break;
        case "ArrowUp":
            break;
        case "ArrowDown":
            break;
    }
    keyAnimation();
});
// btn press listener for arrow
document.querySelector('.btn-l-arr').addEventListener('click', () => {
    MoveBack();
})
document.querySelector('.btn-r-arr').addEventListener('click', () => {
    MoveForward();
})
// function to animate buttons when you press the key
function addRemoveAnimation(selector) {
    const element = document.querySelector(selector);
    element.classList.add('animation');
    setTimeout(() => {
        element.classList.remove('animation');
    }, 300);
}
function keyAnimation() {
    switch (triggerInfo) {
        case "ArrowLeft":
            addRemoveAnimation('.btn-l-arr');
            break;
        case "ArrowRight":
            addRemoveAnimation('.btn-r-arr');
            break;
        case "ArrowUp":
            addRemoveAnimation('.btn-l');
            break;
        case "ArrowDown":
            addRemoveAnimation('.btn-d');
            break;
    }
}
// addclass function
function addClass(element, element2) {
    element.classList.add("active");
    element2.classList.add("active");
}
function removeClass(element, element2) {
    element.classList.remove('active');
    element2.classList.remove('active');
}
// arrrow function that move slider forward
function MoveForward() {
    for (let i = 0; i < LenghtSlider; i++) {
        if (place == 1) {
            let x = parseInt(sliderSize[i].style.order) || LenghtSlider;
            x--;
            if (x == 0) {
                sliderSize[i].style.order = slideDesc[i].style.order = `${LenghtSlider}`;
                if (i == sliderSize.length - 1) {
                    addClass(sliderSize[0], slideDesc[0] );
 
                } else {
                    addClass(sliderSize[i + 1], slideDesc[i + 1]);
                }
                removeClass(sliderSize[i], slideDesc[i]);
            } else {
                sliderSize[i].style.order = slideDesc[i].style.order = `${x}`;
            }
        } else {
            let x = parseInt(sliderSize[i].style.order) || LenghtSlider;
            if (x == 1) {
                sliderSize[i].style.order = slideDesc[i].style.order = `${LenghtSlider}`;
            } else if (x == place + 1) {
                addClass(sliderSize[i], slideDesc[i]);
                sliderSize[i].style.order = slideDesc[i].style.order = `${x - 1}`;
            } else if (x == place) {
                removeClass(sliderSize[i], slideDesc[i]);
                sliderSize[i].style.order = slideDesc[i].style.order = `${x - 1}`;
            } else {
                sliderSize[i].style.order = slideDesc[i].style.order = `${x - 1}`;
            }
        }
    }
}
// arrrow function that move slider back 
function MoveBack() {
    for (let i = 0; i < LenghtSlider; i++) {
        if (place == 1) {
            let x = parseInt(sliderSize[i].style.order) || LenghtSlider;
            if (x == 1) {
                removeClass(sliderSize[i], slideDesc[i]);
            }
            if (x === LenghtSlider) {
                sliderSize[i].style.order = slideDesc[i].style.order = "1";
                addClass(sliderSize[i], slideDesc[i]);
            } else {
                sliderSize[i].style.order = slideDesc[i].style.order = `${x + 1}`;
            }
        } else {
            let x = parseInt(sliderSize[i].style.order) || LenghtSlider;
            if (x == LenghtSlider) {
                sliderSize[i].style.order = slideDesc[i].style.order = "1";
            } else if (x == place - 1 && place > 1) {
                addClass(sliderSize[i], slideDesc[i]);
                sliderSize[i].style.order = slideDesc[i].style.order = `${x + 1}`;
            } else if (x == place) {
                removeClass(sliderSize[i], slideDesc[i]);
                sliderSize[i].style.order = slideDesc[i].style.order = `${x + 1}`;
            }
            else {
                sliderSize[i].style.order = slideDesc[i].style.order = `${x + 1}`;
            }
        }
    }
}
window.onresize = widthFunction;
window.onload = widthFunction;