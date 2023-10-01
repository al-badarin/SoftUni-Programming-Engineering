function townPopulation(input) {

    let towns = {};

    for (let line of input) {
        let townInfo = line.split(' <-> ');
        let [townName, population] = townInfo;
        population = Number(population);

        if (!towns[townName]) {
            towns[townName] = 0;
        }
        towns[townName] += population;
    }

    for (let townName in towns) {
        console.log(`${townName} : ${towns[townName]}`);
    }
}
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);