function solve(input) {

    let numberVistitors = Number(input[0]);
    let index = 1;
    let command = input[index];

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;

    let proteinShake = 0;
    let proteinBar = 0;

    let training = 0;
    let shopping = 0;

    for (let i = 0; i < numberVistitors; i++) {
        if (command === "Back") {
            back++;
            training++;
        }
        else if (command === "Chest") {
            training++;
            chest++;
        }
        else if (command === "Legs") {
            training++;
            legs++;
        }
        else if (command === "Abs") {
            training++;
            abs++;
        }
        else if (command === "Protein shake") {
            shopping++;
            proteinShake++;
        }
        else if (command === "Protein bar") {
            shopping++;
            proteinBar++;
        }
        index++;
        command = input[index];
    }
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${(training / numberVistitors * 100).toFixed(2)}% - work out`);
    console.log(`${(shopping / numberVistitors * 100).toFixed(2)}% - protein`);
}
solve(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])
