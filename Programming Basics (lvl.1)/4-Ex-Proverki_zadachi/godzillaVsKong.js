function solve(input){

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let priceOutfit = Number(input[2]);

    let sumDekor = budget * 0.1;
    let sumOutfit = priceOutfit * statists;

    if (statists > 150){
        sumOutfit = sumOutfit * 0.9
    }

    let totalSumFilm = sumDekor + sumOutfit;

    

    if (totalSumFilm > budget){
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(totalSumFilm - budget).toFixed(2)} leva more.`);
    } else if(budget >= totalSumFilm){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget - totalSumFilm).toFixed(2)} leva left.`);
}
   

}
solve(["9587.88",
"222",
"55.68"])

