function Thermostat() {

  this.temperature = 20;
  this.minimumTemperature = 10;
};

  Thermostat.prototype.increase = function () {
    this.temperature += 1;
  };

  Thermostat.prototype.decrease = function () {
    if (this.temperature === this.minimumTemperature) {
      throw "Cannot decrease temperature beyond minimum";
    } else {
      this.temperature -= 1;
    }
  };
