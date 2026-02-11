input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.pause(randint(500, 5000))
    music.ringTone(523)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.setLedColor(0xff0000)
    while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
    	
    }
    music.stopAllSounds()
    basic.clearScreen()
    basic.turnRgbLedOff()
})
