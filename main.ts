let juego = 0
radio.onReceivedNumber(function (receivedNumber) {
    let recivednumber = 0
    if (recivednumber == 1) {
        if (juego == 2) {
            basic.showIcon(IconNames.Happy)
        } else if (juego == 1) {
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else if (recivednumber == 2) {
        if (juego == 3) {
            basic.showIcon(IconNames.Asleep)
        } else if (juego == 1) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else if (recivednumber == 3) {
        if (juego == 2) {
            basic.showIcon(IconNames.Sad)
        } else if (juego == 1) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    }
})
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
