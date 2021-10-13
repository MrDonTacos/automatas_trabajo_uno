export default class Malo {
    constructor(game, position) {
        this.image = document.getElementById("img_sapo");
    
        this.game = game;

        this.position = position;

        this.width = 52;

        this.height = 24;

    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

}