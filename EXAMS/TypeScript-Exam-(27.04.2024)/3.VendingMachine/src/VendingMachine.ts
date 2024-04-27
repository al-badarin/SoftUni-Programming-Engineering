import { Drink } from "./Drink";

export class VendingMachine {
  buttonCapacity: number;
  drinks: Drink[];

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
    this.drinks = [];
  }

  addDrink(drink: Drink): void {
    if (this.buttonCapacity > this.drinks.length) {
      this.drinks.push(drink);
    }
  }

  removeDrink(name: string) {
    //
  }

  getLongest() {
    //
  }

  getCheapest() {
    //
  }

  buyDrink(name: string) {
    //
  }

  getCount() {
    //
  }

  report() {
    //
  }
}
