function solve(lostFights, helmetPrice,
    swordPrice, shieldPrice, armorPrice) {

    let lostFightCounter = 0;
    let totalExpenses = 0;
    let shieldsBrokenCounter = 0;

    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
        lostFightCounter++;

        if (lostFightCounter % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (lostFightCounter % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (lostFightCounter % 6 === 0) {
            shieldsBrokenCounter++;
            totalExpenses += shieldPrice;

            if (shieldsBrokenCounter % 2 === 0) {
                totalExpenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
solve(7, 2, 3, 4, 5);