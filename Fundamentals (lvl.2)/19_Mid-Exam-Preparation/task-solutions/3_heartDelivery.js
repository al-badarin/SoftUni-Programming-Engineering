function heartDelivery(input) {

    let neighborhood = input.shift().split('@');
    let nextLine = input.shift();
    let currentJump = 0;

    while (nextLine !== 'Love!') {
        let tokens = nextLine.split(' ');
        currentJump += Number(tokens[1]);

        if (currentJump > neighborhood.length - 1) {
            currentJump = 0;
        }

        if (neighborhood[currentJump] === 0) {
            console.log(`Place ${currentJump} already had Valentine's day.`);
        } else {
            neighborhood[currentJump] = neighborhood[currentJump] - 2;
            if (neighborhood[currentJump] === 0) {
                console.log(`Place ${currentJump} has Valentine's day.`);

            }
        }
        nextLine = input.shift();

    }

    console.log(`Cupid's last position was ${currentJump}.`);

    let count = 0;
    let tokensFlag = true;

    neighborhood.forEach(element => {
        if (element !== 0) {
            tokensFlag = false;
            count++;
        }
    });

    if (tokensFlag) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${count} places.`);
    }

}
heartDelivery([
    "10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"
]);