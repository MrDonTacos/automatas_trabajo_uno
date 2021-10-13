import Malo from "../src/malo";


// Cosas chuscas del sapo

let imgMalo = document.getElementById('img_sapo')

let canvas = document.getElementById("screen")
let ctx = canvas.getContext('2d')

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, 800, 600);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    ctx.drawImage(imgMalo, 10, 10, 16, 16);

    requestAnimationFrame(gameLoop);
}



const SCREEN_WIDTH = canvas.offsetWidth
const SCREEN_HEIGHT = canvas.offsetHeight