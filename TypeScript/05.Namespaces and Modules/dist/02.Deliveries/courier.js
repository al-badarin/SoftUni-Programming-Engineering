/// <reference path="foodAndBeverages.ts"/>
export class Courier {
    placesToVisit;
    constructor(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        const existingCustomer = this.placesToVisit.find((customer) => customer.customerName === customerName);
        if (existingCustomer) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        this.placesToVisit.push({ customerName, visited });
        return `${customerName} just became your client.`;
    }
    visitCustomer(customerName) {
        const customer = this.placesToVisit.find((customer) => customer.customerName === customerName);
        if (!customer) {
            throw new Error(`${customerName} is not your customer`);
        }
        customer.visited = true;
        return `Visited ${customerName}.`;
    }
    showCustomers() {
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
