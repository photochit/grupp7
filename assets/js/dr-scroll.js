const container = document.querySelectorAll('.dr-scroll');
 container.forEach(item => {

         
let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

item.addEventListener('mousedown',e => mouseIsDown(e));  
item.addEventListener('mouseup',e => mouseUp(e))
item.addEventListener('mouseleave',e=>mouseLeave(e));
item.addEventListener('mousemove',e=>mouseMove(e));

function mouseIsDown(e){
  isDown = true;
  startY = e.pageY - item.offsetTop;
  startX = e.pageX - item.offsetLeft;
  scrollLeft = item.scrollLeft;
  scrollTop = item.scrollTop; 
}
function mouseUp(e){
  isDown = false;
}
function mouseLeave(e){
  isDown = false;
}
function mouseMove(e){
  if(isDown){
    e.preventDefault();
    //Move vertcally
    const y = e.pageY - item.offsetTop;
    const walkY = y - startY;
    item.scrollTop = scrollTop - walkY;

    //Move Horizontally
    const x = e.pageX - item.offsetLeft;
    const walkX = x - startX;
    item.scrollLeft = scrollLeft - walkX;

  }
}
});   