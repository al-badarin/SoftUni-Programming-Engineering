class Car {
  private _brand: string;
  private _model: string;
  private _horsepower: number;

  constructor(brand: string, model: string, horsepower: number) {
    (this._brand = brand),
      (this._model = model),
      (this._horsepower = horsepower);
  }

  //   Getters & Setters

  get carBrand(): string {
    return this._brand;
  }

  set carBrand(value: string) {
    this._brand = value;
  }

  get carModel(): string {
    return this._model;
  }

  set carModel(value: string) {
    this._model = value;
  }

  get carHorsepower(): number {
    return this._horsepower;
  }

  set carHorsepower(value: number) {
    this._horsepower = value;
  }

  // Method to display car info
  displayCarInfo(): void {
    console.log(
      `The car is: ${this._brand} ${this._model} - ${this._horsepower} HP.`
    );
  }
}

// Test the Car class
const car1 = new Car("Chevrolet", "Impala", 390);
const car2 = new Car("Skoda", "Karoq", 150);

car1.displayCarInfo();
car2.displayCarInfo();
