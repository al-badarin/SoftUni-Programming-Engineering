class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        quantity = Number(quantity);

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        if (this.items.length >= this.capacity) {
            throw new Error("The inventory is already full.");
        }

        let existingItem = this.items.find(item => item.itemName === itemName);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }

    sellItem(itemName, quantity) {
        quantity = Number(quantity);
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        let itemIndex = this.items.findIndex(item => item.itemName === itemName);
        if (itemIndex === -1) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        let item = this.items[itemIndex];
        if (quantity > item.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        item.quantity -= quantity;

        if (item.quantity === 0) {
            this.items.splice(itemIndex, 1);
            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        quantity = Number(quantity);
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        let existingItem = this.items.find(item => item.itemName === itemName);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }

        let outOfStockIndex = this.outOfStock.indexOf(itemName);
        if (outOfStockIndex !== -1) {
            this.outOfStock.splice(outOfStockIndex, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let result = '';
        result += `Current Inventory:\n`;
        result += `${this.items.map(({ itemName, quantity }) => `${itemName}: ${quantity}`).join('\n')}`;
        if (this.outOfStock.length > 0) {
            result += `\nOut of Stock: ${this.outOfStock.join(", ")}`;
        }
        return result;
    }
}