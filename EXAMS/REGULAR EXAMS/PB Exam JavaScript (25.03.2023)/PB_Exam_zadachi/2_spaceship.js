function solve(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let avgHeightAustronauts = Number(input[3]);

    let volumeRocket = width * length * height;
    let volumeRoom = 2 * 2 * (avgHeightAustronauts + 0.40);
    let availableSpace = Math.floor(volumeRocket / volumeRoom);

    if (availableSpace >= 3 && availableSpace <= 10) {
        console.log(`The spacecraft holds ${availableSpace} astronauts.`);
    }
    else if (availableSpace < 3) {
        console.log("The spacecraft is too small.");
    }
    else if (availableSpace > 10) {
        console.log("The spacecraft is too big.");
    }
}
solve(["4.5",
    "4.8",
    "5",
    "1.75"])

