abstract class Appliance {
constructor(public brand: string) {}

abstract turnOn(): void;
}

class WashingMachine extends Appliance {
turnOn(): void {
    console.log(`${this.brand} washing machine is starting the wash cycle.`);
}
}

class Refrigerator extends Appliance {
turnOn(): void {
    console.log(`${this.brand} refrigerator is cooling.`);
}
}

const washingMachine = new WashingMachine("Samsung");
const refrigerator = new Refrigerator("LG");

washingMachine.turnOn();
refrigerator.turnOn();

