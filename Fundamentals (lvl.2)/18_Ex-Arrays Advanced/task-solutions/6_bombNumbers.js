function bombNumbers(arr, bomb) {

    let bombNumber = bomb[0];
    let bombRadius = bomb[1];

    let indexOfBomb = arr.indexOf(bombNumber);
    while (indexOfBomb !== -1) {
        let startExplosionIndex = Math.max(0, indexOfBomb - bombRadius);
        let explosionLength = bombRadius * 2 + 1;
        arr.splice(startExplosionIndex, explosionLength);
        indexOfBomb = arr.indexOf(bombNumber);
    }
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])