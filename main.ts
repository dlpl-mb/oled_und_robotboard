let abstand1 = 0
basic.showIcon(IconNames.Heart)
MuseOLED.init()
basic.pause(100)
MuseOLED.clear()
MuseOLED.clear()
MuseOLED.writeStringNewLine("Alois Bachinger")
MuseOLED.newLine()
MuseOLED.writeStringNewLine("Temperatur: 12 grad")
robotbit.MotorRun(robotbit.Motors.M1A, 161)
led.enable(false)
basic.forever(function () {
    basic.pause(2000)
    MuseOLED.clear()
    basic.pause(2000)
    robotbit.MotorRun(robotbit.Motors.M1A, 138)
    MuseOLED.writeNumNewLine(sonar.ping(
    DigitalPin.P2,
    DigitalPin.P12,
    PingUnit.Centimeters
    ))
    basic.pause(200)
    abstand1 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    MuseOLED.writeNumNewLine(abstand1)
    robotbit.MotorRun(robotbit.Motors.M1A, -108)
    if (abstand1 > 15) {
        robotbit.Servo(robotbit.Servos.S1, 143)
    } else {
        robotbit.Servo(robotbit.Servos.S1, 90)
    }
})
