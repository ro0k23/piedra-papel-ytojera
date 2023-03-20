let juego = 0
input.onGesture(Gesture.Shake, function () {
    juego = randint(1, 3)
    radio.sendNumber(juego)
    if (juego == 1) {
        basic.showIcon(IconNames.Chessboard)
    } else if (juego == "2") {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(2000)
})
