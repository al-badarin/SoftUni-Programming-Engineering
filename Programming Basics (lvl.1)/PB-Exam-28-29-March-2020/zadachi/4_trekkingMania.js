function solve(input) {

    let numberGroups = Number(input[0]);
    let groupMusala = 0;
    let groupMonblan = 0;
    let groupKilimanjaro = 0;
    let groupK2 = 0;
    let groupEverest = 0;

    let currentGroupMembers = 0;
    let totalPeople = 0;
    for (let i = 1; i <= numberGroups; i++) {
        currentGroupMembers = Number(input[i]);

        if (currentGroupMembers <= 5) {
            groupMusala++;
            totalPeople += currentGroupMembers;
        }
        else if (currentGroupMembers <= 12) {
            groupMonblan++;
            totalPeople += currentGroupMembers;
        }
        else if (currentGroupMembers <= 25) {
            groupKilimanjaro++;
            totalPeople += currentGroupMembers;
        }
        else if (currentGroupMembers <= 40) {
            groupK2++;
            totalPeople += currentGroupMembers;
        }
        else if (currentGroupMembers >= 41) {
            groupEverest++;
            totalPeople += currentGroupMembers;
        }
    }
    let percentMusala = groupMusala / totalPeople * 100;
    let percentMonblan = groupMonblan / totalPeople * 100;
    let percentKilimanjaro = groupKilimanjaro / totalPeople * 100;
    let percentK2 = groupK2 / totalPeople * 100;
    let percentEverest = groupEverest / totalPeople * 100;
    
    console.log(`${percentMusala.toFixed(2)}`);
    console.log(`${percentMonblan.toFixed(2)}`);
    console.log(`${percentKilimanjaro.toFixed(2)}`);
    console.log(`${percentK2.toFixed(2)}`);
    console.log(`${percentEverest.toFixed(2)}`);
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
