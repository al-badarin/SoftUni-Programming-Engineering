/// <reference path="foodAndBeverages.ts"/>

export class Courier implements FoodAndBeverages.Delivery {
  constructor(
    protected placesToVisit: { customerName: string; visited: boolean }[]
  ) {}

  newCustomer(customerName: string, visited: boolean = false): string {
    const existingCustomer = this.placesToVisit.find(
      (customer) => customer.customerName === customerName
    );

    if (existingCustomer) {
      throw new Error(`${customerName} is already a customer of yours!`);
    }

    this.placesToVisit.push({ customerName, visited });
    return `${customerName} just became your client.`;
  }

  visitCustomer(customerName: string): string {
    const customer = this.placesToVisit.find(
      (customer) => customer.customerName === customerName
    );

    if (!customer) {
      throw new Error(`${customerName} is not your customer`);
    }

    customer.visited = true;
    return `Visited ${customerName}.`;
  }

  showCustomers(): string {
    return this.placesToVisit
      .map((customer) => `${customer.customerName} -> ${customer.visited}`)
      .join("\n");
  }
}

let courier = new Courier([{ customerName: "DHL", visited: false }]);

courier.newCustomer("Speedy");
courier.newCustomer("MTM");
courier.newCustomer("TipTop");

courier.visitCustomer("DHL");
courier.visitCustomer("MTM");
courier.visitCustomer("MTM");

console.log(courier.showCustomers());
