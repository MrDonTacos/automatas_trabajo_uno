import Malo from "../src/malo";
import Player from "/src/player.js";


let imgMalo = document.getElementById('img_sapo')

let canvas = document.getElementById("screen")
let ctx = canvas.getContext('2d')


let malo = new Malo();

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, 800, 600);

    malo.draw(ctx);

    requestAnimationFrame(gameLoop);
}



const SCREEN_WIDTH = canvas.offsetWidth
const SCREEN_HEIGHT = canvas.offsetHeight

ctx.clearRect(0,0,SCREEN_WIDTH, SCREEN_HEIGHT);

let goose = new Player(SCREEN_WIDTH, SCREEN_HEIGHT); 
goose.draw(imgPlayer,ctx);