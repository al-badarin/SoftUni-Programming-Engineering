function towns(townData) {

    let currentTown = {};

    for (let el of townData) {
        let townInfo = el.split(" | ");
        let townName = townInfo[0];
        let townLatitude = Number(townInfo[1]).toFixed(2);
        let townLongitude = Number(townInfo[2]).toFixed(2);

        currentTown.town = townName;
        currentTown.latitude = townLatitude;
        currentTown.longitude = townLongitude;

        console.log(currentTown);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);