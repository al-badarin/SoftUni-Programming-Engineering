function solve(input) {

    let groupNumber = Number(input[0]);

    let g1 = 0;
    let g2 = 0;
    let g3 = 0;
    let g4 = 0;
    let g5 = 0;

    let groupPeople = 0;
    let people = 0;


    for (let i = 1; i < input.length; i++) {
        groupPeople = Number(input[i]);

        if (groupPeople <= 5) {
            g1 = g1 + groupPeople;
        }
        else if(groupPeople <= 12){
            g2 = g2 + groupPeople;
        }
        else if(groupPeople <= 25){
            g3 = g3 + groupPeople;
        }
        else if(groupPeople <= 40){
            g4 = g4 + groupPeople;
        }
        else if(groupPeople >= 41){
            g5 = g5 + groupPeople;
        }

        people = people + groupPeople
       
    }

    let g1Percent = g1 / (people) * 100;
    let g2Percent = g2 / (people) * 100;
    let g3Percent = g3 / (people) * 100;
    let g4Percent = g4 / (people) * 100;
    let g5Percent = g5 / (people) * 100;

    console.log(`${(g1Percent).toFixed(2)}%`);
    console.log(`${(g2Percent).toFixed(2)}%`);
    console.log(`${(g3Percent).toFixed(2)}%`);
    console.log(`${(g4Percent).toFixed(2)}%`);
    console.log(`${(g5Percent).toFixed(2)}%`);
}
solve(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
