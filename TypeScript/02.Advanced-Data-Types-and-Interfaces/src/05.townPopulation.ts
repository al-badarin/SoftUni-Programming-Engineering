interface TownPopulation {
  [town: string]: number;
}

function createTownPopulationRegistry(input: string[]): void {
  const townPopulationRegistry: TownPopulation = {};

  for (let townData of input) {
    const [townName, townPopulationStr] = townData.split(" <-> ");
    const townPopulation: number = parseInt(townPopulationStr);

    if (townPopulationRegistry.hasOwnProperty(townName)) {
      townPopulationRegistry[townName] += townPopulation;
    } else {
      townPopulationRegistry[townName] = townPopulation;
    }
  }

  for (let town in townPopulationRegistry) {
    console.log(`${town} : ${townPopulationRegistry[town]}`);
  }
}

// Test the function
createTownPopulationRegistry([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);

createTownPopulationRegistry([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2342344",
  "Mexico City <-> 23401925",
]);
