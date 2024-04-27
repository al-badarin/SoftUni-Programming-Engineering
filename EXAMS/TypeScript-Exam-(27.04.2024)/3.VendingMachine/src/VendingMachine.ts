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

  removeDrink(name: string): boolean {
    const searchedDrinkIndex = this.drinks.findIndex(
      (drink) => drink.name === name
    );
    if (searchedDrinkIndex !== -1) {
      this.drinks.splice(searchedDrinkIndex, 1);
      return true;
    }
    return false;
  }

  getLongest(): string {
    const longestDrink = this.drinks.reduce((prev, current) =>
      prev.volume > current.volume ? prev : current
    );
    return longestDrink.toString();
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
