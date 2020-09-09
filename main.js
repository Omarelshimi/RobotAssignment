// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
ctx.fillRect(80, 260, 460, 80);

// Filled Triangle for Hair
fillTriangle(180, 80, 140, 100, 220, 100);
fillTriangle(340, 80, 300, 100, 380, 100);

// Outlined Triangle for Hair
strokeTriangle(260, 80, 220, 100, 300, 100);
strokeTriangle(420, 80, 380, 100, 460, 100);


// Filled Triangle for Neck
fillTriangle(300, 200, 220, 600, 380, 600);

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
fillRectangle(100, 100, 400, 400);

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
fillCircle(200, 250, 50)

// Filled Circle for Right Eye Socket
fillCircle(400, 250, 50)

// Rectangle for Mouth
ctx.fillRect(200, 350, 200, 60);
// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
ctx.beginPath();
ctx.moveTo(200, 380);
ctx.lineTo(400, 380);
ctx.stroke();

// First Vertical Line for Teeth
ctx.beginPath();
ctx.moveTo(250, 350);
ctx.lineTo(250, 410);
ctx.stroke();

// Second Vertical Line for Teeth
ctx.beginPath();
ctx.moveTo(300, 350);
ctx.lineTo(300, 410);
ctx.stroke();

// Third Vertical Line for Teeth
ctx.beginPath();
ctx.moveTo(350, 350);
ctx.lineTo(350, 410);
ctx.stroke();

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(100, 100, 100)";
ctx.beginPath();
ctx.arc(200, 250, 30, 0, 2 * Math.PI);
ctx.fill();

// Filled Circle for Right Eye
ctx.beginPath();
ctx.arc(400, 250, 10, 0, 2 * Math.PI);
ctx.fill();

// Outlined Circle for Left Eye Socket

ctx.strokeStyle = "rgb(100, 100, 100)";
strokeCircle(200, 250, 50)

// Outlined Circle for Right Eye Socket
ctx.beginPath();
ctx.arc(400, 250, 50, 0, 2 * Math.PI);
ctx.stroke();

// Line for Left Eyebrow
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(150, 180);
ctx.lineTo(250, 180);
ctx.stroke();

// Line for Right Eyebrow
ctx.beginPath();
ctx.moveTo(350, 160);
ctx.lineTo(450, 180);
ctx.stroke();

// Outlined Triangle for Nose
strokeTriangle(300, 280, 320, 320, 280, 320)

function fillTriangle(x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
}

function strokeTriangle(x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath()
    ctx.stroke();
}

function fillCircle(x, y, r){
    ctx.beginPath();
ctx.arc(x, y, r, 0, 2 * Math.PI);
ctx.fill();
}

function fillRectangle (x, y, w, h) {
    ctx.fillRect(x, y, w, h);
}

function strokeCircle (x, y, r) {
    ctx.beginPath();
ctx.arc(x, y, r, 0, 2 * Math.PI);
ctx.stroke();
}

