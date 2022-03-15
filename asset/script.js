let canvas = document.getElementById("myCanvas");

canvas.width = 800;
canvas.height = 600;

let c = canvas.getContext("2d");


// Canon
let canonWidth = 50;
let canonHeight = 150;
let canonX = (canvas.width / 2) - canonWidth;
let canonY = (canvas.height) - canonHeight;
c.fillStyle = 'rgb(255,69,0)';
c.fillRect(canonX, canonY, canonWidth, canonHeight);
console.log(canonX);  

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
           canonX = canonX - 5;
            break;
        case 'ArrowRight':
           canonX = canonX + 5;
            break;
    }
});

// Arc, Circles
c.beginPath();
c.arc(150, 100, 35, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

// Lignes
// c.beginPath();
// c.moveTo(-45, 150);
// c.lineTo(0, 50);
// c.lineTo(45, 150);
// c.lineTo(90, 50);
// c.lineTo(135, 150);
// c.lineTo(180, 50);
// c.lineTo(225, 150);
// c.lineTo(270, 50);
// c.lineTo(305, 150);
// c.stroke();

