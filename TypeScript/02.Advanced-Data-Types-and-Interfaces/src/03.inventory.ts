interface Hero {
  name: string;
  level: number;
  items?: string[];
}

function createHeroRegister(heroesData: string[]): void {
  const heroes: Hero[] = [];

  for (let heroData of heroesData) {
    const [name, levelStr, itemsStr] = heroData.split(" / ");
    const level: number = parseInt(levelStr);
    const items: string[] = itemsStr.split(", ");

    const hero: Hero = {
      name: name,
      level: level,
      items: items,
    };

    heroes.push(hero);
  }

  const sortedHeroes: Hero[] = heroes.sort((a, b) => a.level - b.level);

  for (let hero of sortedHeroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}\n`);
  }
}

// Test the function
createHeroRegister([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

createHeroRegister([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
