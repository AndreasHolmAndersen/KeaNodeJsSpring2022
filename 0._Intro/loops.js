const carBatteries = [0.12345, 0.21345, 0.67891, 0.56789];

const chargedCarBatteries = carBatteries.map(battery => battery + 0.4);

carBatteries.forEach((battery, index) => console.log(`You go in stand ${index + 1}.`));


const drainedBatteries = carBatteries.filter(drainedBattery => drainedBattery < 0.5);
console.log(drainedBatteries);