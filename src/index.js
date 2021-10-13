import Player from "/src/player.js";

let canvas = document.getElementById("screen")
let ctx = canvas.getContext('2d')

const SCREEN_WIDTH = canvas.offsetWidth
const SCREEN_HEIGHT = canvas.offsetHeight
debugger
ctx.clearRect(0,0,SCREEN_WIDTH, SCREEN_HEIGHT);

let goose = new Player(SCREEN_WIDTH, SCREEN_HEIGHT); 
goose.draw(ctx);