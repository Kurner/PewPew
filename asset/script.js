let canvas = document.getElementById("myCanvas");

canvas.width = 800;
canvas.height = 600;

let c = canvas.getContext("2d");


// Canon
let canonWidth = 50;
let canonHeight = 150;
let canonX = (canvas.width / 2) - canonWidth;
let canonY = (canvas.height) - canonHeight;

// Arc, Circles
let cibleX;
let cibleY;
target();

// Projectil
let projectilX = 0;
let projectilY = 0;

// Counter
let counter = 0;

run();

function target()
{
    cibleX = Math.random() * canvas.width;
    cibleY = Math.random() * 200;
}

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
           canonX = canonX - 25;
            break;
        case 'ArrowRight':
           canonX = canonX + 25;
            break;
        case ' ':
            projectilX = canonX + (canonWidth / 2);
            projectilY = canonY;
            break;
    }
});


function updateScreen()
{
    c.clearRect(0, 0, canvas.width, canvas.height);
    // Mise à jour du déplacement du canon
    c.fillStyle = 'rgb(255,69,0)';
    c.fillRect(canonX, canonY, canonWidth, canonHeight);

    // Mise à jour de la cible
    c.beginPath();
    c.arc(cibleX, cibleY, 35, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke(); 

    // Mise à jour du projectile
    c.beginPath();
    c.arc(projectilX, projectilY, 15, 0, Math.PI * 2, false);
    c.strokeStyle = 'red';
    c.stroke();
    projectilY-= 7;

    // Mise à jour de la collision
    var dx = projectilX - cibleX;
    var dy = projectilY - cibleY;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 15 + 35) {        
            target();
            projectilX = 0;
            projectilY = 0;
            counter++;
    }

    // Mise à jour du counter
    c.fillStyle = 'grey';
    c.font = "30px Arial";
    c.fillText(counter, 10, 50);    
}

// On ne sort pas des functions qui sont "prises" dans un callback tant qu'on ne le précise pas
// Les valeurs de base ne sont donc pas reprise
function run() {
    updateScreen();
      window.requestAnimationFrame(run);
}



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

