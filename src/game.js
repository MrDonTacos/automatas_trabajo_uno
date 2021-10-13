import Player from "./player";

export default class Game {
    constructor(gameWidth, gameHeight, bricksPerRow) {
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.gameObjects = [];
      this.bricks = [];
  
    }

    start() {
        this.bricks = buildLevel(this, this.levels[this.currentLevel]);
        this.ball.reset();
        this.gameObjects = [this.ball, this.paddle];
    
        this.gamestate = GAMESTATE.RUNNING;
      }
  
    update(deltaTime) {
            this.start();
        
        [...this.gameObjects, ...this.bricks].forEach(object =>
            object.update(deltaTime)
        );
  
      this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);
    }
  
    draw(ctx) {
      [...this.gameObjects, ...this.bricks].forEach(object => object.draw(ctx));
    }
  }
  