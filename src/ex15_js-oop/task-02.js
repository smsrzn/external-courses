class Room {
  constructor(appliances) {
    this.appliances = appliances;
  }

  getPowerСonsumptionInRoom() {
    let power = 0;
    for (let i = 0; i < this.appliances.length; i += 1) {
      if (this.appliances[i].isSwitchedOn) {
        power += this.power;
      }
    }
    return power;
  }
}

class Kitchen extends Room {
  constructor(appliances) {
    super();
    this.appliances = appliances;
  }

  searchApplianceByName(name) {
    for (let i = 0; i < this.appliances.length; i += 1) {
      if (this.appliances[i].name === name) {
        return this.appliances[i];
      }
    }
    return 'Appliance not found';
  }
}

class Appliance {
  constructor(name, power, isSwitchedOn) {
    this.name = name;
    this.power = power;
    this.isSwitchedOn = isSwitchedOn;
  }
}

const microwave = new Appliance('микроволновая печь', 500, true);
const refrigerator = new Appliance('холодильник', 700, true);
const lamp = new Appliance('лампа', 200, false);

const kitchen = new Kitchen([microwave, refrigerator, lamp]);

console.log(kitchen.getPowerСonsumptionInRoom());
console.log(kitchen.searchApplianceByName('холодильник'));
