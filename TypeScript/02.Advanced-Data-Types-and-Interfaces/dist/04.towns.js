function createTownObjects(input) {
    for (let row of input) {
        const [townName, latitudeStr, longitudeStr] = row.split(" | ");
        const latitude = parseFloat(latitudeStr);
        const longitude = parseFloat(longitudeStr);
        const townObject = {
            townName: townName,
            latitude: latitude,
            longitude: longitude,
        };
        console.log(townObject);
    }
}
// Test the function
createTownObjects([
    "Sofia | 42.696552 | 23.32601",
    "Beijing | 39.913818 | 116.363625",
]);
createTownObjects(["Plovdiv | 136.45 | 812.575"]);
