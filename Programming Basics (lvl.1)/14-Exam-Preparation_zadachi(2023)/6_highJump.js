function solve(input) {

    let index = 0;
    let goalHeight = Number(input[index]);
    index++;

    let startingHeight = goalHeight - 30;
    let isFailed = false;

    let jumpsCounter = 0;
    while (startingHeight <= goalHeight) {
        for (let i = 0; i < 3; i++) {
            let currentJump = Number(input[index]);
            index++;
            jumpsCounter++;

            if (currentJump > startingHeight) {
                startingHeight += 5;
                break;
            }

            if (i === 2) {
                console.log(`Tihomir failed at ${startingHeight}cm after ${jumpsCounter} jumps.`);
                isFailed = true;
            }

        }
        if (isFailed) {
            break;
        }

    }
    if (!isFailed) {
        console.log(`Tihomir succeeded, he jumped over ${goalHeight}cm after ${jumpsCounter} jumps.`);
    }
}
solve(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])

