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

  getCheapest(): string {
    const cheapestDrink = this.drinks.reduce((prev, current) =>
      prev.price < current.price ? prev : current
    );
    return cheapestDrink.toString();
  }

  buyDrink(name: string): string {
    const drinkToBuy = this.drinks.find((drink) => drink.name === name);
    if (drinkToBuy) {
      this.removeDrink(name);
      return drinkToBuy.toString();
    } else {
      return `Error: The drink '${name}' is not found in the vending machine.`;
    }
  }

  getCount(): number {
    //
  }

  report(): string {
    //
  }
}
