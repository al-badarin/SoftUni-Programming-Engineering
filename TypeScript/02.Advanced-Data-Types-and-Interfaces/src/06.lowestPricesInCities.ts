interface ProductPrice {
  product: string;
  price: number;
  town: string;
}

function findLowestPrices(data: string[]): void {
  const productPrices: { [product: string]: ProductPrice[] } = {};

  for (let entry of data) {
    const [town, product, priceStr] = entry.split(" | ");
    const price: number = parseFloat(priceStr);

    if (!(product in productPrices)) {
      productPrices[product] = [{ product, price, town }];
    } else {
      productPrices[product].push({ product, price, town });
    }
  }

  for (let product in productPrices) {
    const lowestPriceTowns: ProductPrice[] = productPrices[product].sort(
      (a, b) => a.price - b.price
    );
    const lowestPrice: ProductPrice = lowestPriceTowns[0];
    console.log(
      `${lowestPrice.product} -> ${lowestPrice.price} (${lowestPrice.town})`
    );
  }
}

// Test the function
findLowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
