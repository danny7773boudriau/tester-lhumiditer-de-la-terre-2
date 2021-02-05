let humidité = 0
let allumer_led_graphe_de_1_à_1023 = 0
let allumer_led_1 = 0
let allumer_led_2 = 0
let allumer_led_3 = 0
let allumer_led_4 = 0
let allumer_led_5 = 0
input.onButtonPressed(Button.A, function () {
    if (true) {
        humidité = pins.analogReadPin(AnalogPin.P0)
        humidité = pins.analogReadPin(AnalogPin.P1)
        if (true) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.analogWritePin(AnalogPin.P1, 1023)
            if (humidité) {
                let de_1_à_25575 = 0
                allumer_led_graphe_de_1_à_1023 = Math.map(1, 255.75, 511.5, 767.25, 1023)
                led.plotBarGraph(
                1,
                255.75
                )
                allumer_led_1 = de_1_à_25575
                basic.pause(2000)
                basic.clearScreen()
                if (humidité) {
                    let de_25575_à_5115 = 0
                    allumer_led_graphe_de_1_à_1023 = Math.map(1, 255.75, 511.5, 767.25, 1023)
                    led.plotBarGraph(
                    255.75,
                    511.5
                    )
                    allumer_led_2 = de_25575_à_5115
                    basic.pause(2000)
                    basic.clearScreen()
                    if (humidité) {
                        let de_5115_à_76725 = 0
                        allumer_led_graphe_de_1_à_1023 = Math.map(1, 255.75, 511.5, 767.25, 1023)
                        led.plotBarGraph(
                        551.5,
                        767.25
                        )
                        allumer_led_3 = de_5115_à_76725
                        basic.pause(2000)
                        basic.clearScreen()
                        if (humidité) {
                            let de_76725_à_1023 = 0
                            allumer_led_graphe_de_1_à_1023 = Math.map(1, 255.75, 511.5, 767.25, 1023)
                            led.plotBarGraph(
                            767.25,
                            1023
                            )
                            allumer_led_4 = de_76725_à_1023
                            basic.pause(2000)
                            basic.clearScreen()
                            if (humidité) {
                                let _1023 = 0
                                allumer_led_graphe_de_1_à_1023 = Math.map(1, 255.75, 511.5, 767.25, 1023)
                                led.plotBarGraph(
                                1023,
                                1023
                                )
                                allumer_led_5 = _1023
                                basic.pause(2000)
                                basic.clearScreen()
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
	
})
