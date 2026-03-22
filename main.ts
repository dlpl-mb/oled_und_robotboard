led.enable(false)
basic.showIcon(IconNames.Heart)
MuseOLED.init()
basic.pause(100)
MuseOLED.clear()
MuseOLED.clear()
MuseOLED.writeStringNewLine("Alois Bachinger")
MuseOLED.newLine()
MuseOLED.writeStringNewLine("Temperatur: 12 grad")
robotbit.MotorRun(robotbit.Motors.M1A, 161)
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
    MuseOLED.writeNumNewLine(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P8,
    PingUnit.Centimeters
    ))
    robotbit.MotorRun(robotbit.Motors.M1A, -108)
})
