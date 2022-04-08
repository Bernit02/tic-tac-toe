input.onPinPressed(TouchPin.P0, function () {
    y += 1
    on = 0
})
input.onButtonPressed(Button.A, function () {
    x += -1
    on = 0
})
input.onPinPressed(TouchPin.P2, function () {
    on = 1
})
input.onButtonPressed(Button.B, function () {
    x += 1
    on = 0
})
input.onPinPressed(TouchPin.P1, function () {
    y += -1
    on = 0
})
let on = 0
let x = 0
let y = 0
on = 0
basic.forever(function () {
    if (y >= 0) {
        y = 0
    }
    if (y <= -2) {
        y = -2
    }
    if (x >= 2) {
        x = 2
    }
    if (x <= 0) {
        x = 0
    }
    if (y == 0 && on == 0) {
        if (x == 0) {
            led.plot(0, 0)
        } else {
            led.unplot(0, 0)
        }
    } else {
        led.unplot(0, 0)
    }
    if (y == 0 && x == 1 && on == 0) {
        led.plot(2, 0)
    } else {
        led.unplot(2, 0)
    }
    if (y == 0 && x == 2 && on == 0) {
        led.plot(4, 0)
    } else {
        led.unplot(4, 0)
    }
    if (y == -1 && x == 0 && on == 0) {
        led.plot(0, 2)
    } else {
        led.unplot(0, 2)
    }
    if (y == -1 && x == 1 && on == 0) {
        led.plot(2, 2)
    } else {
        led.unplot(2, 2)
    }
    if (y == -1 && x == 2 && on == 0) {
        led.plot(4, 2)
    } else {
        led.unplot(4, 2)
    }
    if (y == -2 && x == 0 && on == 0) {
        led.plot(0, 4)
    } else {
        led.unplot(0, 4)
    }
    if (y == -2 && x == 1 && on == 0) {
        led.plot(2, 4)
    } else {
        led.unplot(2, 4)
    }
    if (y == -2 && x == 2 && on == 0) {
        led.plot(4, 4)
    } else {
        led.unplot(4, 4)
    }
    if (x == 0 && (y == 0 && on == 1)) {
        led.plot(0, 0)
    }
})
