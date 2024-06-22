interface City {
  name: string;
  population: number;
  treasury: number;
  taxRate: number;

  // methods:
  collectTaxes(): void;
  applyGrowth(percentage: number): void;
  applyRecession(percentage: number): void;
}

function cityTaxes(name: string, population: number, treasury: number): City {
  return {
    name,
    population,
    treasury,
    taxRate: 10,

    collectTaxes() {
      this.treasury += Math.floor(this.population * this.taxRate);
    },

    applyGrowth(percentage: number) {
      this.population = Math.floor(this.population * (1 + percentage / 100));
    },

    applyRecession(percentage: number) {
      const decreaseAmount = Math.floor(this.treasury * (percentage / 100));
      this.treasury -= decreaseAmount;
    },
  };
}

// Testing with code:
const city: City = cityTaxes("Tortuga", 7000, 15000);
console.log(city);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

// // Apply recession of 10%
// city.applyRecession(10);

// // Log the treasury after recession
// console.log("Treasury after recession:", city.treasury);
