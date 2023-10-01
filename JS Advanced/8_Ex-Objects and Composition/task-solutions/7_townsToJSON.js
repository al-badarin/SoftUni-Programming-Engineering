function townsToJSON(towns) {

    let townsArr = [];

    for (let town of towns.slice(1)) {
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);
        lat = Number(lat).toFixed(2);
        lng = Number(lng).toFixed(2);
        let townObj = {
            Town: townName,
            Latitude: Number(lat),
            Longitude: Number(lng),
        };
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));
}

// function printTableAsJson(params) {
//     let towns = [];

//     for (let i = 1; i < params.length; i++) {
//         let [town, latitude, longitude] = params[i]
//             .split('|')
//             .filter(e => e !== '')
//             .map(e => e.trim());

//         towns.push({
//             Town: town,
//             Latitude: Number(latitude),
//             Longitude: Number(longitude)
//         });
//     }

//     console.log(JSON.stringify(towns));
// }
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);