interface ProductInfo {
  product: string;
  price: number;
  town: string;
}

function lowestPrices(input: string[]): void {
  const products: { [productName: string]: ProductInfo[] } = {};

  // Parse input
  input.forEach((entry) => {
    const [town, product, priceStr] = entry.split(" | ");
    const price: number = Number(priceStr);

    if (!(product in products)) {
      products[product] = [{ product, price, town }];
    } else {
      products[product].push({ product, price, town });
    }
  });

  // Output lowest prices
  for (const product in products) {
    const lowestPriceTowns: ProductInfo[] = products[product].sort(
      (a, b) => a.price - b.price
    );
    const lowestPrice: ProductInfo = lowestPriceTowns[0];

    console.log(`${product} -> ${lowestPrice.price} (${lowestPrice.town})`);
  }
}

// Test case
const input = [
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
];

lowestPrices(input);
