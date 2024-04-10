interface Table {
  townName: string;
  latitude: number;
  longitude: number;
}

function createTownObjects(input: string[]): void {
  for (let row of input) {
    const [townName, latitudeStr, longitudeStr] = row.split(" | ");
    const latitude: number = parseFloat(latitudeStr);
    const longitude: number = parseFloat(longitudeStr);

    const townObject: Table = {
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
