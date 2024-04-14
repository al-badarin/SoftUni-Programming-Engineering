interface Dealership<T> {
  dealershipName: T;
  soldCars: number;
}

interface Actions<T> {
  sellCar(dealerID: T, model: T): void;
}

class CarDealership<T> implements Dealership<T>, Actions<T> {
  soldCars: number = 0;
  modelsSold: { [key: string]: T } = {};

  constructor(public dealershipName: T) {}

  sellCar(dealerID: T, model: T): void {
    this.modelsSold[dealerID as unknown as string] = model;
    this.soldCars++;
  }

  showDetails(): string {
    let result = `${this.dealershipName}:\n`;
    for (const dealerID in this.modelsSold) {
      result += `${dealerID} sold ${this.modelsSold[dealerID]}\n`;
    }
    return result;
  }
}

// Test the CarDealership class
let dealership = new CarDealership("SilverStar");
dealership.sellCar("BG01", "C Class");
dealership.sellCar("BG02", "S Class");
dealership.sellCar("BG03", "ML Class");
dealership.sellCar("BG04", "CLK Class");
console.log(dealership.showDetails());
