describe("Thermostat", function() {

  var temperature;
  var thermostat;

  beforeEach( function() {
    thermostat = new Thermostat();
  })


  it("has a default temperature of 20 degrees", function() {
    expect(thermostat.temperature).toBe(20);
  });

  })
