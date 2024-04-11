class Car {
    _brand;
    _model;
    _horsepower;
    constructor(brand, model, horsepower) {
        (this._brand = brand),
            (this._model = model),
            (this._horsepower = horsepower);
    }
    //   Getters & Setters
    get carBrand() {
        return this._brand;
    }
    set carBrand(value) {
        this._brand = value;
    }
    get carModel() {
        return this._model;
    }
    set carModel(value) {
        this._model = value;
    }
    get carHorsepower() {
        return this._horsepower;
    }
    set carHorsepower(value) {
        this._horsepower = value;
    }
    // Method to display car info
    displayCarInfo() {
        console.log(`The car is: ${this._brand} ${this._model} - ${this._horsepower} HP.`);
    }
}
// Test the Car class
const car1 = new Car("Chevrolet", "Impala", 390);
const car2 = new Car("Skoda", "Karoq", 150);
car1.displayCarInfo();
car2.displayCarInfo();
