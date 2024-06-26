class BankAccount {
  private static nextId: number = 1;
  private _id: number;
  private _balance: number;
  private static interestRate: number = 0.02;

  constructor() {
    this._id = BankAccount.nextId++;
    this._balance = 0;
  }

  // Getter for ID
  get id(): number {
    return this._id;
  }

  // Getter for Balance
  get balance(): number {
    return this._balance;
  }

  // Getter for Interest Rate
  static getInterestRate(): number {
    return BankAccount.interestRate;
  }

  // Setter for Interest Rate
  static setInterestRate(interest: number): void {
    BankAccount.interestRate = interest;
  }

  // Method to deposit money
  deposit(amount: number): void {
    this._balance += amount;
    console.log(`Deposited ${amount} to ID${this._id}`);
  }

  // Method to calculate interest for given years
  getInterest(years: number): number {
    const interest = this._balance * BankAccount.interestRate * years;
    return interest;
  }
}

// Test Client
function bankCommands(commands: string[]): void {
  const accounts: { [id: number]: BankAccount } = {};

  for (let command of commands) {
    const [cmd, ...params] = command.split(" ");

    switch (cmd) {
      case "Create":
        const account = new BankAccount();
        accounts[account.id] = account;
        console.log(`Account ID${account.id} created`);
        break;

      case "Deposit":
        const id = parseInt(params[0]);
        const amount = parseInt(params[1]);
        if (accounts[id]) {
          accounts[id].deposit(amount);
        } else {
          console.log(`Account does not exist`);
        }
        break;

      case "SetInterest":
        const interestRate = parseFloat(params[0]);
        BankAccount.setInterestRate(interestRate);
        break;

      case "GetInterest":
        const accountId = parseInt(params[0]);
        const years = parseInt(params[1]);
        if (accounts[accountId]) {
          const interest = accounts[accountId].getInterest(years);
          console.log(interest.toFixed(2));
        } else {
          console.log(`Account does not exist`);
        }
        break;

      case "End":
        return;

      default:
        console.log(`Invalid command`);
        break;
    }
  }
}

// Test the BankAccount class with commands
const commands1: string[] = [
  "Create",
  "Deposit 1 20",
  "GetInterest 1 10",
  "End",
];

const commands2: string[] = [
  "Create",
  "Create",
  "Deposit 1 20",
  "Deposit 3 20",
  "Deposit 2 10",
  "SetInterest 1.5",
  "GetInterest 1 1",
  "GetInterest 2 1",
  "GetInterest 3 1",
  "End",
];

// Test client with commands1
bankCommands(commands1);

console.log("-------------");

// Test client with commands2
bankCommands(commands2);
