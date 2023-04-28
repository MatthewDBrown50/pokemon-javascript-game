const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.mozImageSmoothingEnabled = true;
context.webkitImageSmoothingEnabled = true;
context.msImageSmoothingEnabled = true;
context.imageSmoothingEnabled = true;

canvas.width = 1024;
canvas.height = 576;

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

const mapImage = new Image();
mapImage.src = './assets/maps/gameMap.png';

const playerImage = new Image();
playerImage.src = './assets/sprites/player/playerDown.png';

class Sprite {
    constructor({image, position, velocity}) {
        this.image = image
        this.position = position
        this.velocity = velocity
    }

    draw(){
        context.drawImage(this.image, this.position.x, this.position.y);
    }
}

const background = new Sprite({
    image: mapImage,
    position: {
        x: -590,
        y: -610
    }
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    context.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        canvas.width / 2 - playerImage.width / 8,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height
    );

    if(keys.w.pressed && lastKeyPressed === 'w'){
        background.position.y = background.position.y + 2;
    }
    else if(keys.a.pressed && lastKeyPressed === 'a'){
        background.position.x = background.position.x + 2;
    }
    else if(keys.s.pressed && lastKeyPressed === 's'){
        background.position.y = background.position.y - 2;
    }
    else if(keys.d.pressed && lastKeyPressed === 'd'){
        background.position.x = background.position.x - 2;
    }
    else if(keys.w.pressed){
        background.position.y = background.position.y + 2;
    }
    else if(keys.a.pressed){
        background.position.x = background.position.x + 2;
    }
    else if(keys.s.pressed){
        background.position.y = background.position.y - 2;
    }
    else if(keys.d.pressed){
        background.position.x = background.position.x - 2;
    }
}
animate()

let lastKeyPressed = ''
window.addEventListener('keypress', (e) => {
    switch (e.key.toLowerCase()) {
        case 'w':
            keys.w.pressed = true
            lastKeyPressed = 'w'
            break;
        case 'a':
            keys.a.pressed = true
            lastKeyPressed = 'a'
            break;
        case 's':
            keys.s.pressed = true
            lastKeyPressed = 's'
            break;
        case 'd':
            keys.d.pressed = true
            lastKeyPressed = 'd'
            break;
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.key.toLowerCase()) {
        case 'w':
            keys.w.pressed = false
            break;
        case 'a':
            keys.a.pressed = false
            break;
        case 's':
            keys.s.pressed = false
            break;
        case 'd':
            keys.d.pressed = false
            break;
    }
});

