window.addEventListener('keydown', (event) => {
    switch (event.key) {
        // if key w is pressed, move up
        case 'w':
            if (player.velocity.y === 0) {
                player.velocity.y = -20;
            }
            break
        // if key a is pressed, returns true
        case 'a':
            keys.a.pressed = true;
            break
        // if key d is pressed, returns true
        case 'd':
            keys.d.pressed = true;
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
})