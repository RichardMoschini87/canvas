import { inizializzaTela, ripulisciTela } from "./canvasUtils/Tela.js"
import { keys } from "./Constats/KeyboardConstats.js"
import { runInputKeyboard } from "./keyboardInput/KeyboardInput.js"
import Enemy from "./player/Enemy.js"
import Player from "./player/Player.js"

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
// il quadrato del gioco
canvas.width = 1024
canvas.height = 576
// creo il rettangolo su cui agire che parte da in alto a sinistra(0,0)
context.fillRect(0, 0, canvas.width, canvas.height)

//istanzio primo personaggio
const player = new Player(context)
// istanzio nemico
const enemy = new Enemy(context)

animation()
runInputKeyboard()

function animation() {
    window.requestAnimationFrame(animation)
    // ripulisco il quadrato di gioco
    ripulisciTela(context, canvas.width, canvas.height)
    // ricreo il quadrato di gioco
    inizializzaTela(context, canvas.width, canvas.height)
    // aggiorna azione players
    player.update(canvas)
    enemy.update(canvas)
    context.fillStyle = 'black'

    // movimento asse x 0 per fermare il keypress che altrimenti somma o sottrae 1 altrimenti per saltare viene modificata
    // la y che torna
    // giù in automatico perchè è stata impostata la gravità
    player.velocity.x = 0
    enemy.velocity.x = 0
    if (keys.ArrowLeft.pressed && keys.lastKeyPlayer === 'ArrowLeft')
        player.velocity.x = -4
    else if (keys.ArrowRight.pressed && keys.lastKeyPlayer === 'ArrowRight')
        player.velocity.x = 4
    else if (keys.ArrowUp.pressed && keys.lastKeyPlayer === 'ArrowUp')
        player.velocity.y = -6
    else if (keys.a.pressed && keys.lastKeyEnemy === 'a')
        enemy.velocity.x = -4
    else if (keys.d.pressed && keys.lastKeyEnemy === 'd')
        enemy.velocity.x = 4
    else if (keys.w.pressed && keys.lastKeyEnemy === 'w')
        enemy.velocity.y = -20


    //condizione di contatto orizzontale o verticale con il nemico
    if (player.attacco.position.x + player.attacco.width >= enemy.position.x
        && player.attacco.position.x <= enemy.attacco.position.x + enemy.attacco.width
        && player.attacco.position.y + player.attacco.height >= enemy.attacco.position.y &&
        player.attacco.position.y <= enemy.attacco.position.y + enemy.attacco.height) {
        console.log('contatto')

    }
}



