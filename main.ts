// ARM REMOTE for the micro:bit Retro Arcade
// Drives the ELECFREAKS robot arm (Wonder Building Kit, case 08) by radio.
// It sends the same numbers as the Joystick:bit handle, so the arm's own
// program works without changes:
// https://makecode.microbit.org/_544Vadd8sHJc
//
//   D-pad up    = 1   claw servo (S0) one way
//   D-pad down  = 2   claw servo (S0) the other way
//   D-pad right = 3   motor M2 one way
//   D-pad left  = 4   motor M2 the other way
//   A           = 5   motor M1 one way
//   B           = 6   motor M1 the other way
//   nothing     = 0   stop
//
// If something moves the "wrong" way, swap that pair of numbers here.
// Radio group 0, the same as the arm program.
let command = 0
let lastCommand = -1
let label = ""
radio.setGroup(0)
scene.setBackgroundColor(12)
let claw = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . b b . . . . . . .
    . . . . . . . b b . . . . . . .
    . . . . . . . b b . . . . . . .
    . . . . . . 5 5 5 5 . . . . . .
    . . . . . 5 5 5 5 5 5 . . . . .
    . . . . b b . . . . b b . . . .
    . . . b b . . . . . . b b . . .
    . . . b . . . . . . . . b . . .
    . . . b . . . . . . . . b . . .
    . . . b b . . . . . . b b . . .
    . . . . b . . . . . . b . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
claw.setPosition(80, 70)
game.onUpdateInterval(100, function () {
    if (controller.up.isPressed()) {
        command = 1
        label = "UP"
    } else if (controller.down.isPressed()) {
        command = 2
        label = "DOWN"
    } else if (controller.right.isPressed()) {
        command = 3
        label = "RIGHT"
    } else if (controller.left.isPressed()) {
        command = 4
        label = "LEFT"
    } else if (controller.A.isPressed()) {
        command = 5
        label = "A"
    } else if (controller.B.isPressed()) {
        command = 6
        label = "B"
    } else {
        command = 0
        label = "STOP"
    }
    radio.sendNumber(command)
    if (command != lastCommand) {
        claw.sayText(label)
        lastCommand = command
    }
})
