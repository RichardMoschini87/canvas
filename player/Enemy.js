import Sprite from "./Sprite.js"

class Enemy extends Sprite {
    constructor(/** @type {CanvasRenderingContext2D} */context) {
        let color = 'red'
        /** @type {number} */
        let gravity = 0.2
        // creo parametri per il primo Sprite
        /** @type {PlayerTypes.Position} */
        let position = { x: 400, y: 100 }
        /** @type {PlayerTypes.Velocity} */
        let velocity = { x: 0, y: 2 }
        /** @type {PlayerTypes.Grandezza} */
        let grandezza = { altezza: 150, larghezzza: 60 }
        super(position, context, velocity, grandezza, gravity, color)
    }
}

export default Enemy