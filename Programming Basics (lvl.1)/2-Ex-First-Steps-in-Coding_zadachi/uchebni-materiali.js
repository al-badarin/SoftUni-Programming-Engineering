function solve(input){

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litres = Number(input[2]);
    let discount = Number(input[3]);

    let sumPens = pens * 5.80;
    let sumMarkers = markers * 7.20;
    let sumLitres = litres * 1.20;
    
    let totalSum = sumPens + sumMarkers + sumLitres;
    let result = totalSum - (totalSum * (discount / 100));

    console.log(result);
}
solve(["2","3","4","25"])