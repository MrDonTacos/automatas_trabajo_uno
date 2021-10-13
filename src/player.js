export default class Player {
    constructor(screenWidth, screenHeight) {
        this.imgPlayer = document.getElementById('img_pato')
        this.width = 400
        this.height = 150

        this.position = {
            x: screenWidth / 4 - this.width /2,
            y: screenHeight - this.height - 20
        }
    }

    draw = (ctx) => {
        ctx.drawImage(imgPlayer,this.position.x, this.position.y,this.width, this.height)
    }
}