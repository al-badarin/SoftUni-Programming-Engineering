"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.buttonCapacity > this.drinks.length) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const searchedDrinkIndex = this.drinks.findIndex((drink) => drink.name === name);
        if (searchedDrinkIndex !== -1) {
            this.drinks.splice(searchedDrinkIndex, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        const longestDrink = this.drinks.reduce((prev, current) => prev.volume > current.volume ? prev : current);
        return longestDrink.toString();
    }
    getCheapest() {
        const cheapestDrink = this.drinks.reduce((prev, current) => prev.price < current.price ? prev : current);
        return cheapestDrink.toString();
    }
    buyDrink(name) {
        const drinkToBuy = this.drinks.find((drink) => drink.name === name);
        if (drinkToBuy) {
            //  this.removeDrink(name); // !this logic is not applied because it changes the expected output from the task description
            return drinkToBuy.toString();
        }
        else {
            return `Error: The drink '${name}' is not found in the vending machine.`;
        }
    }
    getCount() {
        let availableDrinks = this.drinks.length;
        return availableDrinks;
    }
    report() {
        const drinksInfo = this.drinks.map((drink) => drink.toString()).join("\n");
        return `Drinks available:\n${drinksInfo}`;
    }
}
exports.VendingMachine = VendingMachine;
