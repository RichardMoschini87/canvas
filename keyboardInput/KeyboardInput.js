import { keys } from "../Constats/KeyboardConstats.js"

function runInputKeyboard() {
    window.addEventListener('keydown', (/** @type {KeyboardEvent} */ event) => {
        switch (event.key) {
            case 'ArrowRight':
                keys.ArrowRight.pressed = true
                keys.lastKeyPlayer = 'ArrowRight'
                break
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true
                keys.lastKeyPlayer = 'ArrowLeft'
                break
            case 'ArrowUp':
                keys.ArrowUp.pressed = true
                keys.lastKeyPlayer = 'ArrowUp'
                break
            case 'd':
                keys.d.pressed = true
                keys.lastKeyEnemy = 'd'
                break
            case 'a':
                keys.a.pressed = true
                keys.lastKeyEnemy = 'a'
                break
            case 'w':
                keys.w.pressed = true
                keys.lastKeyEnemy = 'w'
                break
        }
    })

    window.addEventListener('keyup', (/** @type {KeyboardEvent} */ event) => {
        console.log(event.key)
        switch (event.key) {
            case 'ArrowRight':
                keys.ArrowRight.pressed = false
                break
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = false
                break
            case 'ArrowUp':
                keys.ArrowUp.pressed = false
                break
            case 'd':
                keys.d.pressed = false
                break
            case 'a':
                keys.a.pressed = false
                break
            case 'w':
                keys.w.pressed = false
                break
        }
    })
}

export { runInputKeyboard }