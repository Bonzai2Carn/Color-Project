document.addEventListener('DOMContentLoaded', () => {});


//pwheel DOMS
const hue = document.getElementById('hue');
const satCanvas = document.getElementById('satid-canvas');
const indicator = document.querySelector('.indicator')
const eyedropper = document.querySelector('.eyedropper')
const satId = document.querySelector('.satid');

const ctxHue = hue.getContext('2d');
const circ = hue.getBoundingClientRect();
const ctxSat = satCanvas.getContext('2d');
const eyedrop = satCanvas.getBoundingClientRect();


// ctxSat.beginPath;
// ctxSat.rect(75,80,150,140);
// ctxSat.lineWidth = 2;
// ctxSat.stroke();
// ctxSat.closePath();

let gradColors = [];
gradColors.push('#00ffff'); //cyan - aqua
gradColors.push('#0500ff');//blue
gradColors.push('#fa00ff'); //magenta - purplish red
gradColors.push('#ff0000'); //red
gradColors.push('#faff00'); //yellow
gradColors.push('#05ff00'); //green

function createShadeGradient(color) {
    canvas = satCanvas;
    ctx = ctxSat;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if(!color) color = '#f00';
    ctx.beginPath;
    ctx.fillStyle = color;
    ctx.arc(75, 70, 65, 2* Math.PI, false);
    ctx.fill();
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    var whiteGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    whiteGradient.addColorStop(0.15, "#fff");
    whiteGradient.addColorStop(0.90, "transparent");
    ctx.fillStyle = whiteGradient;
    ctx.arc(75, 70, 65, 2* Math.PI, false);
    ctx.fill();
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    var blackGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    blackGradient.addColorStop(0, "transparent");
    blackGradient.addColorStop(1, "#000");
    ctx.fillStyle = blackGradient;
    ctx.arc(75, 70, 65, 2* Math.PI, false);
    ctx.fill();
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    canvas.addEventListener('mousedown', function(e) {
      mousePos(e);
    });
  };
  
createShadeGradient("#ff0000");

function colorWheel(xc, yc, r, radientColors) {
    let arcLength = (2*Math.PI) / radientColors.length;
    let start = 0;
     let gradient = null;
     let startColor = null,
        endColor = null;
     
    for (let i = 0; i < radientColors.length; i++) {
        startColor = radientColors[i];
        endColor = radientColors[(i + 1) % radientColors.length];

        // x start / end of the next arc to draw
        let xStart = xc + Math.cos(start) * r;
        let xEnd = xc + Math.cos(start + arcLength) * r;
        // y start / end of the next arc to draw
        let yStart = yc + Math.sin(start) * r;
        let yEnd = yc + Math.sin(start + arcLength) * r;

        ctxHue.beginPath();

        gradient = ctxHue.createLinearGradient(xStart, yStart, xEnd, yEnd);
        gradient.addColorStop(0, startColor);
        gradient.addColorStop(1, endColor);

        ctxHue.strokeStyle = gradient;
        ctxHue.arc(xc, yc, r, start, start + arcLength);
        ctxHue.lineWidth = 30;
        ctxHue.stroke();
        ctxHue.closePath();
        

        start += arcLength;
    }
}
colorWheel(150, 150, 100, gradColors);

// Shade Eyedropper Event Listener
function mousePos(e) {
    // let parentPosition = mousePos(satId);
    let xPosition = e.clientX - satId.clientWidth + 20;
    let yPosition = e.clientY - satId.clientHeight;
    eyedropper.style.left = xPosition + "px";
    eyedropper.style.top = yPosition + "px";
    console.log(e.x);
}

//Hue indicator Event Listener
    const centerX = satId.left + satId.width/2;
    const centerY = satId.top + satId.height/2;
    let angle = 0;
    const radius = 120;
    let dd = 3
hue.addEventListener('mousedown', (e)=>{
    //Wherever the mouse clicks, the object moves there. 
    let xPosition = centerX + Math.cos(angle)*radius; //the position at x
    let yPosition = centerY + Math.sin(angle)*radius; //the position at y
    angle += Math.atan2(yPosition, xPosition) * 180 / Math.PI
    // angle +=  Math.acos(1-Math.pow(dd/radius,2)/2);//
    indicator.style.left = xPosition + "px";
    indicator.style.top = yPosition + "px";
    console.log("in range");
}
)

    // x = centerX + Math.cos(angle)*radius;
    // y = centerX + Math.sin(angle)*radius;
    // angle += Math.acos(1-Math.pow(dd/radius,2)/2);//