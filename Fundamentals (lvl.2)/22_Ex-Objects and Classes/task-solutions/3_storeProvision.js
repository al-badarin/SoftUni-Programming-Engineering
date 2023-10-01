function storeProvision(currentStocks, forDelivery) {

    let store = {};

    for (let i = 0; i < currentStocks.length; i += 2) {
        let product = currentStocks[i];
        store[product] = Number(currentStocks[i + 1]);
    }

    for (let i = 0; i < forDelivery.length; i += 2) {
        let product = forDelivery[i];
        if (!store.hasOwnProperty(product)) {
            store[product] = 0;
        }
        store[product] += Number(forDelivery[i + 1]);
    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);