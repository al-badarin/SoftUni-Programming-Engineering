class CarDealership {
    dealershipName;
    soldCars = 0;
    modelsSold = {};
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
    }
    sellCar(dealerID, model) {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }
    showDetails() {
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
