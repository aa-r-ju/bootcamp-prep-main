// YOUR CODE BELOW
function allSystemsGo(obj) {
  if (typeof obj === "boolean") {
    return obj;
  }

  let values = Object.values(obj);

  for (let i = 0; i < values.length; i++) {
    if (!allSystemsGo(values[i])) {
      return false;
    }
  }

  return true;
}
let systems = {
  power: {
    batteries: true,
    solarCells: true,
    generator: true,
    fuelCells: true,
  },
  telecoms: {
    antennas: {
      highGain: true,
      mediumGain: true,
      lowGain: true,
    },
    transmitter: true,
    receiver: true,
  },
  attitudeControl: {
    stabilization: {
      spin: true,
      threeAxis: true,
    },
  },
  propulsion: {
    engines: {
      engine1: true,
      engine2: true,
      engine3: false,
    },
    thrusters: true,
    propellant: true,
  },
  environment: {
    cooling: true,
    heating: true,
    lifeSupport: true,
  },
};

allSystemsGo(systems);
