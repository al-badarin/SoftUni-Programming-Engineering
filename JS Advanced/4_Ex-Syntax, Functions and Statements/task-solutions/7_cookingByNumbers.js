function cookingByNumbers(num, p1, p2, p3, p4, p5) {

    let number = Number(num);
    let arrayOfCommands = [p1, p2, p3, p4, p5];

    let chop = function () {
        return number / 2;
    };
    let dice = function () {
        return Math.sqrt(number);
    };
    let spice = function () {
        return number + 1;
    };
    let bake = function () {
        return number * 3;
    };
    let fillet = function () {
        return number * 0.80;
    };

    for (let i = 0; i < arrayOfCommands.length; i++) {
        let currentCommand = arrayOfCommands[i];
        switch (currentCommand) {
            case 'chop':
                number = chop(number);
                console.log(number);
                break;
            case 'dice':
                number = dice(number);
                console.log(number);
                break;
            case 'spice':
                number = spice(number);
                console.log(number);
                break;
            case 'bake':
                number = bake(number);
                console.log(number);
                break;
            case 'fillet':
                number = fillet(number);
                console.log(number);
                break;
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');