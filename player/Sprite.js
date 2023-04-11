import * as PlayerTypes from './TypePlayer.js'

class Sprite {
    /** @type {PlayerTypes.Position} */
    position

    /** @type {PlayerTypes.Velocity} */
    velocity

    /** @type {CanvasRenderingContext2D} */
    context

    /** @type {PlayerTypes.Grandezza} */
    grandezza

    /** @type {number} */
    gravity

    /** @type {PlayerTypes.Attacco} */
    attacco

    /** @type {string} */
    colorSprite

    /**
     * 
     * @param {@type PlayerTypes.Position} position 
     * @param {@type CanvasRenderingContext2D } context 
     * @param {@type PlayerTypes.Velocity} velocity 
     * @param {@type PlayerTypes.Grandezza} grandezza
     * @param {@type string} colorSprite
     */
    constructor( /** @type {PlayerTypes.Position} */ position, /** @type {CanvasRenderingContext2D} */ context, /** @type {PlayerTypes.Velocity} */velocity, /** @type {PlayerTypes.Grandezza} */ grandezza, /** @type {number} */ gravity, /** @type {string} */ colorSprite) {
        this.position = position
        this.context = context
        this.velocity = velocity
        this.grandezza = grandezza
        this.gravity = gravity
        this.attacco = { position: this.position, width: 100, height: 50 }
        this.colorSprite = colorSprite
    }

    /**
     * creazione della figura dello sprite e posizione iniziale
     */
    draw() {
        this.context.fillStyle = this.colorSprite
        // Disegna lo sprite del personaggio
        this.context.fillRect(this.position.x, this.position.y, this.grandezza.larghezzza, this.grandezza.altezza)

        this.context.fillStyle = 'green'
        // disegna lo sprite dell'attacco
        this.context.fillRect(this.attacco.position.x, this.attacco.position.y, this.attacco.width, this.attacco.height)
    }
    /**
        * aggiorna la posizione dello sprite tenendo conto dello spazio creato nel canvas
        *
        * @param {HTMLCanvasElement} 
        */
    update(/** @type {HTMLCanvasElement} */ canvas) {
        this.draw()
        // aggirno posizione y x dello sprite con la velocity
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.grandezza.altezza + this.velocity.y >= canvas.height)
            this.velocity.y = 0
        else
            this.velocity.y += this.gravity
    }
}

export default Sprite


