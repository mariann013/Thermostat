describe("Thermostat", function() {

  var temperature;
  var thermostat;
  var powerSavingMode;

  beforeEach( function() {
    thermostat = new Thermostat();
  })


  it("has a default temperature of 20 degrees", function() {
    expect(thermostat.temperature).toBe(20);
  })

  it("can increase the temperature", function() {
    thermostat.increase();
    expect(thermostat.temperature).toBe(21);
  })

  it("can decrease the temperature", function() {
    thermostat.decrease();
    expect(thermostat.temperature).toBe(19);
  })

  it("should have power saving mode on", function() {
    thermostat.powerSavingOn();
    expect(thermostat.powerSavingMode).toBe(true);
  })

  it("should have power saving mode off", function() {
    thermostat.powerSavingOff();
    expect(thermostat.powerSavingMode).toBe(false);
  })

  })
