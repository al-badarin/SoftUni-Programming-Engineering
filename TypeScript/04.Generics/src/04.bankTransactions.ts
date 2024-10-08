abstract class CreateAccount<T, U> {
  constructor(public bankName: T, public bankID: U) {}

  abstract deposit(amount: number): void;
  abstract expense(amount: number, expenseType: string): void;
  abstract showDetails(): string;
}

class PersonalAccount<T, U> extends CreateAccount<T, U> {
  readonly ownerName: string;
  public money: number = 0;
  public recentTransactions: { [key: string]: number } = {};

  constructor(bankName: T, bankID: U, ownerName: string) {
    super(bankName, bankID);
    this.ownerName = ownerName;
  }

  deposit(amount: number): void {
    this.money += amount;
  }

  expense(amount: number, expenseType: string): void {
    if (this.money >= amount) {
      if (this.recentTransactions[expenseType]) {
        this.recentTransactions[expenseType] += amount;
      } else {
        this.recentTransactions[expenseType] = amount;
      }
      this.money -= amount;
    } else {
      throw new Error(`You can't make ${expenseType} transaction`);
    }
  }

  showDetails(): string {
    let totalMoneySpentOnExpenses = 0;
    for (const expense in this.recentTransactions) {
      totalMoneySpentOnExpenses += this.recentTransactions[expense];
    }

    return `Bank name: ${this.bankName}\nBank ID: ${this.bankID}\nOwner name: ${this.ownerName}\nMoney: ${this.money}\nMoney spent: ${totalMoneySpentOnExpenses}`;
  }
}

// Test the PersonalAccount class
let account = new PersonalAccount("DSK", 101240, "Ivan Ivanov");
account.deposit(1000);
account.deposit(1000);
account.expense(700, "Buy new phone");
account.expense(400, "Book a vacation");
account.expense(400, "Book a vacation");
account.expense(100, "Buy food");
console.log(account.showDetails());

console.log("--------------");

let account2 = new PersonalAccount("Fibank", 100000, "Petar Petrol");
account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, "Buy a new car");
account2.expense(200, "Go to a fancy restaurant");
account2.expense(100, "Go to a bar");
account2.expense(30, "Go to the movies");
console.log(account2.showDetails());
