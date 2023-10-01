function solve(input) {

    let numberDays = Number(input[0]);
    let kmDay1 = Number(input[1]);

    let totalDistance = 0;
    totalDistance += kmDay1;

    let index = 2;

    for (let i = 0; i < numberDays; i++) {
        let percentAddedToNextDay = Number(input[index]);
        kmDay1 = kmDay1 + ((kmDay1 * percentAddedToNextDay) / 100);
        totalDistance += kmDay1;
        index++;


    }
    if (totalDistance >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalDistance - 1000)} more kilometers!`);
    }
    else if (totalDistance < 1000) {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalDistance)} more kilometers`);
    }


}
solve(["5",//numberDays        //0
    "30",//kmDay1             //1
    "10",//percentDay2       //2
    "15",//percentDay3      //3
    "20",//percentDay4     //4
    "5",//percentDay5     //5
    "12"])//percentDay6  //6    
