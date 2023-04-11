
/**
 * Ripulisce la tela sulla quale disegnare gli sprite, prende in input il contesto e le dimensioni dello schermo
 * @param {CanvasRenderingContext2D}
 * @param {number} width
 * @param {number} height
 */
function ripulisciTela(/** @type {CanvasRenderingContext2D} */ context,/** @type {number} */ width,/** @type {number} */ height) {
    context.clearRect(0, 0, width, height)
}

/**
 * Inizializza la tela sulla quale disegnare gli sprite,  prende in input il contesto e le dimensioni dello schermo
 * @param {CanvasRenderingContext2D} context
 * @param {number} width
 * @param {number} height
 */
function inizializzaTela(/** @type {CanvasRenderingContext2D} */ context,/** @type {number} */ width,/** @type {number} */ height) {
    context.fillRect(0, 0, width, height)
}

export { ripulisciTela, inizializzaTela }