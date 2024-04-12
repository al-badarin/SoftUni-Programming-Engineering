class Pokemon {
    name;
    element;
    health;
    constructor(name, element, health) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}
class Trainer {
    name;
    badges = 0;
    pokemonCollection = [];
    constructor(name) {
        this.name = name;
    }
    addPokemon(pokemon) {
        this.pokemonCollection.push(pokemon);
    }
    hasPokemonWithElement(element) {
        return this.pokemonCollection.some((pokemon) => pokemon.element === element);
    }
    removeDeadPokemon() {
        this.pokemonCollection = this.pokemonCollection.filter((pokemon) => pokemon.health > 0);
    }
}
function pokemonTrainer(input) {
    const trainers = [];
    for (const line of input) {
        if (line === "Tournament") {
            break;
        }
        const [trainerName, pokemonName, element, healthStr] = line.split(" ");
        const health = Number(healthStr);
        const pokemon = new Pokemon(pokemonName, element, health);
        let trainer = trainers.find((t) => t.name === trainerName);
        if (!trainer) {
            trainer = new Trainer(trainerName);
            trainers.push(trainer);
        }
        trainer.addPokemon(pokemon);
    }
    for (const line of input) {
        if (line === "End") {
            break;
        }
        const element = line.trim();
        for (const trainer of trainers) {
            if (trainer.hasPokemonWithElement(element)) {
                trainer.badges++;
            }
            else {
                trainer.pokemonCollection.forEach((pokemon) => {
                    if (pokemon.element === element) {
                        pokemon.health -= 10;
                    }
                });
                trainer.removeDeadPokemon();
            }
        }
    }
    const sortedTrainers = trainers.sort((a, b) => b.badges - a.badges);
    for (const trainer of sortedTrainers) {
        const numberOfPokemon = trainer.pokemonCollection.length;
        console.log(`${trainer.name} ${trainer.badges} ${numberOfPokemon}`);
    }
}
// Test the function
const inputTest1 = [
    "Peter Charizard Fire 100",
    "George Squirtle Water 38",
    "Peter Pikachu Electricity 10",
    "Tournament",
    "Fire",
    "Electricity",
    "End",
];
const inputTest2 = [
    "Sam Blastoise Water 18",
    "Narry Pikachu Electricity 22",
    "John Kadabra Psychic 90",
    "Tournament",
    "Fire",
    "Electricity",
    "Fire",
    "End",
];
console.log("Output 1:");
pokemonTrainer(inputTest1);
console.log("-------------------");
console.log("Output 2:");
pokemonTrainer(inputTest2);
