
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
if(sliderSize.length != slideDesc.length){
    alert('something wrong');
}

// hide the start inicializering
// check what width size of screem 
function widthFunction() {
    widthCheck = document.documentElement.clientWidth;
    place = widthCheck > 0 && widthCheck < 576 ? 1 : (widthCheck > 576 && widthCheck < 1200 ? 2 : 3);
    sledePosition();
}
// Sort and add order number to element
function sledePosition() {
    let i = 0;
    while (i < LenghtSlider) {
        if (i < place) {
            sliderSize[i].style.order = `${i}`;
            slideDesc[i].style.order = `${i}`;
        } else if (i >= place) {
            let y = i + 1;
            sliderSize[i].style.order = `${y}`;
            slideDesc[i].style.order = `${y}`;
        }
        // remove active class when image resized 
        if(sliderSize[i].classList.contains('active')){
            sliderSize[i].classList.remove('active');
        }
          // remove active class fron description when image resized 
        if( slideDesc[i].classList.contains('active')){
            slideDesc[i].classList.remove('active');
        }
        i++;
    }
    // make sure that active element take right place
    sliderSize[0].style.order = `${place}`;
    slideDesc[0].style.order = `${place}`;
}

// keypress listner
document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowLeft") {
        triggerInfo = event.key;
        MoveBack();
        keyAnimation();
       
    } else if (event.key == "ArrowRight") {
        triggerInfo = event.key;
        MoveForward();
        keyAnimation();
        
    } else if (event.key == "ArrowUp") {
        triggerInfo = event.key;
        keyAnimation();
    } else if (event.key == "ArrowDown") {
        triggerInfo = event.key;
        keyAnimation();
    }
});

// btn press listener for arrow
document.querySelector('.btn-l-arr').addEventListener('click', () => {
    MoveBack();
})
document.querySelector('.btn-r-arr').addEventListener('click', () => {
    MoveForward();
})
// function to animate buttons when you press the key
function keyAnimation(){
    switch(triggerInfo){
        case "ArrowLeft":{
            document.querySelector('.btn-l-arr').classList.add('animation');
            setTimeout(() => { document.querySelector('.btn-l-arr').classList.remove('animation'); }, 300);
            break;
        }
        case "ArrowRight":{
            document.querySelector('.btn-r-arr').classList.add('animation');
            setTimeout(() => { document.querySelector('.btn-r-arr').classList.remove('animation'); }, 300);
            break;
        }
        case "ArrowUp":{
            document.querySelector('.btn-l').classList.add('animation');
            setTimeout(() => { document.querySelector('.btn-l').classList.remove('animation'); }, 300);
            break;
        }
        case "ArrowDown":{
            document.querySelector('.btn-d').classList.add('animation');
            setTimeout(() => { document.querySelector('.btn-d').classList.remove('animation'); }, 300);
            break;
        }
    }
}

// arrrow function that move slider forward
function MoveForward() {

    let i = 0;
    while (i < LenghtSlider) {
        // sliderSize[i].style.order = `${i}`;
        if (place == 1) {
            let x = sliderSize[i].getAttribute('style').replace('order:', '').replace(';', '');
            x--;
            if (x == 0) {
                sliderSize[i].style.order = `${LenghtSlider}`;
                slideDesc[i].style.order = `${LenghtSlider}`;
                if (i == sliderSize.length - 1) {
                    sliderSize[0].classList.add('active');
                    slideDesc[0].classList.add('active');
                } else {
                    sliderSize[i + 1].classList.add('active');
                    slideDesc[i + 1].classList.add('active');
                }
                sliderSize[i].classList.remove('active');
                slideDesc[i].classList.remove('active');
            } else {
                sliderSize[i].style.order = `${x}`;
                slideDesc[i].style.order = `${x}`;
            }

        } else {
            let x = sliderSize[i].getAttribute('style').replace('order:', '').replace(';', '');
            if (x == 1) {
                sliderSize[i].style.order = `${LenghtSlider}`;
                slideDesc[i].style.order = `${LenghtSlider}`;
            } else if (x == place + 1) {
                sliderSize[i].classList.add('active');
                slideDesc[i].classList.add('active');
                x--;
                sliderSize[i].style.order = `${x}`;
                slideDesc[i].style.order = `${x}`;
            } else if (x == place) {
                sliderSize[i].classList.remove('active');
                slideDesc[i].classList.remove('active');
                x--;
                sliderSize[i].style.order = `${x}`;
                slideDesc[i].style.order = `${x}`;
            } else {
                x--;
                sliderSize[i].style.order = `${x}`;
                slideDesc[i].style.order = `${x}`;
            }
        }
        i++;
    }
}
// arrrow function that move slider back 
function MoveBack() {
    let i = 0;
    while (i < LenghtSlider) {
        // sliderSize[i].style.order = `${i}`;
        if (place == 1) {
            let x = sliderSize[i].getAttribute('style').replace('order:', '').replace(';', '');
            if(x == 1){
                sliderSize[i].classList.remove('active');
                slideDesc[i].classList.remove('active');
            }
            if(x == LenghtSlider){
                sliderSize[i].style.order = "1";// alert(i);
                slideDesc[i].style.order = "1";// alert(i);
                sliderSize[i].classList.add('active');  
                slideDesc[i].classList.add('active');  
            }else{
                x++;
                sliderSize[i].style.order = `${x}`;
                slideDesc[i].style.order = `${x}`;
            }
            
            

        } else {
            let x = sliderSize[i].getAttribute('style').replace('order:', '').replace(';', '');
            if (x == LenghtSlider) {
                sliderSize[i].style.order = "1";
                slideDesc[i].style.order = "1";
            } else if (x == place - 1 && place > 1) {
                sliderSize[i].classList.add('active');
                slideDesc[i].classList.add('active');
                x++;
                sliderSize[i].style.order = `${x}`;
                slideDesc[i].style.order = `${x}`;
            } else if (x == place) {
                sliderSize[i].classList.remove('active');
                slideDesc[i].classList.remove('active');
                x++;
                sliderSize[i].style.order = `${x}`;
                slideDesc[i].style.order = `${x}`;
            }
            else {
                x++;
                sliderSize[i].style.order = `${x}`;
                slideDesc[i].style.order = `${x}`;
            }
            // if(place==1){
            //     parent.querySelector('[style ="order: 1;"]').classList.add('active');
            // }
        }
        i++;
    }
}

window.onresize = widthFunction;
window.onload = widthFunction;
