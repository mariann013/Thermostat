function Thermostat() {

  this.temperature = 20;
  this.powerSavingMode = true;

  Thermostat.prototype.increase = function () {
    this.temperature += 1;
  };

  Thermostat.prototype.decrease = function () {
    this.temperature -= 1;
  };

  Thermostat.prototype.powerSavingOn = function () {
    this.powerSavingMode = true;
  };

  Thermostat.prototype.powerSavingOff = function () {
    this.powerSavingMode = false;
  };
}
