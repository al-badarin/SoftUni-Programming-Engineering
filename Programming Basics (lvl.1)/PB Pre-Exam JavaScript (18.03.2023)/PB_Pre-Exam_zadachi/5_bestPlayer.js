function solve(input) {

    let index = 0;
    let command = input[index];

    let hetrick = 0;
    let theBest = 0;

    while (command !== "END") {
         namePlayer = input[index];
        index++;
         goal = Number(input[index]);

        if (goal <= theBest) {
            namePlayer = input[index-3];
        }

        if (goal > theBest) {
            theBest = goal
        }

        if (theBest >= 10) {
            hetrick++
            console.log(`${namePlayer} is the best player!`)
            break;
        } 
        
        if (theBest >= 3) {
            hetrick++
        }

        index++
        command = input[index];
    } 
    
    if (command === "END") {
        console.log(`${namePlayer} is the best player!`)
    } 
    
    if (hetrick >= 1) {
        console.log(`He has scored ${theBest} goals and made a hat-trick !!!`)

    } else if (hetrick < 1) {
        console.log(`He has scored ${theBest} goals.`)
    }

}

//     if (goals >= 3 && goals < 10) {
//         console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
//     }
//     else if (goals <= 2) {
//         console.log(`He has scored ${goals} goals.`);
//     }
//     else if (goals > 10) {
//         break;
//     }
//     index++;
//     command = input[index];

// }

solve(["Neymar",//0
    "2",        //1
    "Ronaldo",  //2
    "1",        //3
    "Messi",    //4
    "3",        //5
    "END"])     //6
