const anchor = document.getElementById('anchor');
const rekt = anchor.getBoundingClientRect();
const anchorX = (rekt.left + rekt.width / 2);
const anchorY = (rekt.top + rekt.height / 2) - 360;
const eyes = document.querySelectorAll('.eye')

document.addEventListener('pointermove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  
    console.log(angleDeg);
   
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    } )

});

document.addEventListener('touchmove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  
    console.log(angleDeg);
   
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    } )

});

function angle(cx,cy,ex,ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy,dx); //range (PI, PI)
    const deg = rad * 180 / Math.PI; // rads to degs, range (-180, 180)
    return deg;

}