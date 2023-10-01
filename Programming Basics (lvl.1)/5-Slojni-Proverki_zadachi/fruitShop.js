function fruitShop2(input) {
    let fruit = input[0]
    let day = input[1]
    let count = Number(input[2])
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday'
        || day === 'Friday') {
        switch (fruit) {
            case 'banana': console.log((2.5 * count).toFixed(2)); break;
            case 'apple': console.log((1.2 * count).toFixed(2)); break;
            case 'orange': console.log((0.85 * count).toFixed(2)); break;
            case 'grapefruit': console.log((1.45 * count).toFixed(2)); break;
            case 'kiwi': console.log((2.7 * count).toFixed(2)); break;
            case 'pineapple': console.log((5.5 * count).toFixed(2)); break;
            case 'grapes': console.log((3.85 * count).toFixed(2)); break;
            default:console.log('error')
 
 
        }
    }
    else if (day === 'Saturday' || day === 'Sunday') {
        switch (fruit) {
            case 'banana': console.log((2.7 * count).toFixed(2)); break;
            case 'apple': console.log((1.25 * count).toFixed(2)); break;
            case 'orange': console.log((0.90 * count).toFixed(2)); break;
            case 'grapefruit': console.log((1.60 * count).toFixed(2)); break;
            case 'kiwi': console.log((3 * count).toFixed(2)); break;
            case 'pineapple': console.log((5.6 * count).toFixed(2)); break;
            case 'grapes': console.log((4.2 * count).toFixed(2)); break;
            default:console.log('error')
     }
    }
    else {
        console.log('error')
    }
 
 
}
solve(["tomato",
"Monday",
"0.5"])






