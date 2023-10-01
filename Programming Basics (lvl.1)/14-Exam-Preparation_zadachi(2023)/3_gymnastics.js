function solve(input) {

    let country = input[0];
    let tool = input[1];

    let totalGrade = 0;

    if (country === "Bulgaria") {
        switch (tool) {
            case "ribbon": totalGrade = 9.600 + 9.400; break;
            case "hoop": totalGrade = 9.550 + 9.750; break;
            case "rope": totalGrade = 9.500 + 9.400; break
        }
    }

    if (country === "Russia") {
        switch (tool) {
            case "ribbon": totalGrade = 9.100 + 9.400; break;
            case "hoop": totalGrade = 9.300 + 9.800; break;
            case "rope": totalGrade = 9.600 + 9.000; break
        }
    }

    if (country === "Italy") {
        switch (tool) {
            case "ribbon": totalGrade = 9.200 + 9.500; break;
            case "hoop": totalGrade = 9.450 + 9.350; break;
            case "rope": totalGrade = 9.700 + 9.150; break
        }
    }

    let pointsToMaximum = 20 - totalGrade;
    let percent = (pointsToMaximum / 20) * 100;

    console.log(`The team of ${country} get ${totalGrade.toFixed(3)} on ${tool}.`);
    console.log(`${percent.toFixed(2)}%`);
}
solve(["Bulgaria", "ribbon"])