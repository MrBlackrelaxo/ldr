let variable = 0
basic.forever(function () {
    variable = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    variable,
    999
    )
    if (pins.analogReadPin(AnalogPin.P0) >= 400) {
        basic.showIcon(IconNames.Yes)
    }
})
