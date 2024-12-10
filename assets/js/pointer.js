const cursor = document.querySelector('.cursor');


const positionElement = (e)=> {
var mouseY = e.pageY;
var mouseX = e.pageX;

mouseX = mouseX-23;
mouseY = mouseY-23;

cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

}

window.addEventListener('mousemove', positionElement);
window.addEventListener('scroll', positionElement);

function enlarge() 
{
    cursor.style.width = "100px";
    cursor.style.height = "100px";
}
function normal() 
{
    cursor.style.width = "50px";
    cursor.style.height = "50px";
}