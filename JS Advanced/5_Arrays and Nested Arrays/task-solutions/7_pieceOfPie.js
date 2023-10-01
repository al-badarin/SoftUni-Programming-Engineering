function pieceOfPie(pieFlavours, target1, target2) {

    indexTarget1 = pieFlavours.indexOf(target1);
    indexTarget2 = pieFlavours.indexOf(target2);

    let resArr = pieFlavours.slice(indexTarget1, indexTarget2 + 1);
    return resArr;
}
console.log(pieceOfPie(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));