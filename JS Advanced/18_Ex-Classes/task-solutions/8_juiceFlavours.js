function solve(juicesArr) {

    let juicesAmount = new Map();
    let juicesBottles = new Map();

    for (let i = 0; i < juicesArr.length; i++) {
        let [juiceName, amount] = juicesArr[i].split(' => ');
        amount = Number(amount);

        if (!juicesAmount.has(juiceName)) {
            juicesAmount.set(juiceName, 0);
        }

        let totalAmount = juicesAmount.get(juiceName) + amount;

        if (totalAmount >= 1000) {
            if (!juicesBottles.has(juiceName)) {
                juicesBottles.set(juiceName, 0);
            }

            let newBottles = Math.trunc(totalAmount / 1000);
            let totalBottles = juicesBottles.get(juiceName) + newBottles;
            juicesBottles.set(juiceName, totalBottles);
        }

        juicesAmount.set(juiceName, totalAmount % 1000);

    }

    // for (const [key, value] of juicesBottles.entries()) {
    //     console.log(`${key} => ${value}`);
    // }

    juicesBottles.forEach((v, k) => console.log(`${k} => ${v}`))
}
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);