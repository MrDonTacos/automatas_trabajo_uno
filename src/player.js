class Player {
    constructor(width, heigth, screenWidth, screenHeight) {
        this.width = width
        this.heigth = heigth

        this.postition = {
            x: screenWidth / 2 - this.width /2,
            y: screenHeight - this.heigth -10
        }
    }

    draw = (ctx) => {
        ctx.fillRect(this.postition.x, this.postition.y, this.heigth)
    }
}