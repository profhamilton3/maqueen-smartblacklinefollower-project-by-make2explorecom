let BLUE = 0
let GREEN = 0
let RED = 0
let item = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (Maqueen.Ultrasonic(PingUnit.Centimeters) > 15) {
        if (Maqueen.ReadPatrol(Maqueen.Patrol.PatrolLeft) == 0 && Maqueen.ReadPatrol(Maqueen.Patrol.PatrolRight) == 0) {
            Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 255)
            Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 255)
        } else {
            if (Maqueen.ReadPatrol(Maqueen.Patrol.PatrolLeft) == 0 && Maqueen.ReadPatrol(Maqueen.Patrol.PatrolRight) == 1) {
                Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 0)
                Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 255)
                if (Maqueen.ReadPatrol(Maqueen.Patrol.PatrolLeft) == 1 && Maqueen.ReadPatrol(Maqueen.Patrol.PatrolRight) == 1) {
                    Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 0)
                    Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 255)
                }
            } else {
                if (Maqueen.ReadPatrol(Maqueen.Patrol.PatrolLeft) == 1 && Maqueen.ReadPatrol(Maqueen.Patrol.PatrolRight) == 0) {
                    Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 255)
                    Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 0)
                    if (Maqueen.ReadPatrol(Maqueen.Patrol.PatrolLeft) == 1 && Maqueen.ReadPatrol(Maqueen.Patrol.PatrolRight) == 1) {
                        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 255)
                        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 0)
                    }
                    if (Maqueen.ReadPatrol(Maqueen.Patrol.PatrolLeft) == 1 && Maqueen.ReadPatrol(Maqueen.Patrol.PatrolRight) == 0) {
                        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 255)
                    } else {
                        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 0)
                    }
                }
            }
        }
    } else {
        Maqueen.MotorStop(Maqueen.Motors.All)
    }
})
basic.forever(function () {
    RED = 0
    GREEN = 0
    BLUE = 255
    for (let index = 0; index < 255; index++) {
        RED += 1
        BLUE += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        GREEN += 1
        RED += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        BLUE += 1
        GREEN += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
})
