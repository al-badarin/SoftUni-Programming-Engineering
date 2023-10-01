function solve(input) {

    let liliAge = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stollenMoney = 0;
    let addedMoney = 10;

    for (let i = 1; i <= liliAge; i++) {
        if (i % 2 === 0) {
            savedMoney+=addedMoney;
            stollenMoney++;
            addedMoney += 10;
        }
        else {
            toysCounter++;
        }
    }
    let totalMoneyFromToys = toysCounter * singleToyPrice;
    let totalSavedMoney = (savedMoney + totalMoneyFromToys) - stollenMoney;

    if(totalSavedMoney >= washingMashinePrice){
        console.log(`Yes! ${(totalSavedMoney - washingMashinePrice).toFixed(2)}`)
    }
    else{
        console.log(`No! ${(washingMashinePrice - totalSavedMoney).toFixed(2)}`)
    }


}
solve(["10",
    "170.00",
    "6"])
