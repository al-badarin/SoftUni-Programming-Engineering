function guineaPig(input) {

    let kgFood = input[0];
    let kgHay = input[1];
    let kgCover = input[2];
    let kgPig = input[3];

    let grFood = kgFood * 1000;
    let grHay = kgHay * 1000;
    let grCover = kgCover * 1000;
    let grPig = kgPig * 1000;

    let isEnough = true;

    for (let day = 1; day <= 30; day++) {
        grFood -= 300;

        if (day % 2 === 0) {
            let hay = grFood * 0.05;
            grHay -= hay;

            if (grFood < 0 || grHay < 0) {
                isEnough = false;
                console.log("Merry must go to the pet store!");
                break;
            }
        }

        if (day % 3 === 0) {
            let cover = grPig / 3;
            grCover -= cover;

            if (grFood < 0 || grCover < 0) {
                isEnough = false;
                console.log("Merry must go to the pet store!");
                break;
            }
        }
    }
    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(grFood / 1000).toFixed(2)}, Hay: ${(grHay / 1000).toFixed(2)}, Cover: ${(grCover / 1000).toFixed(2)}.`);
    }

}
// guineaPig([
//     "10",//kg food
//     "5",//kg hay
//     "5.2",//kg cover
//     "1"//pig weight kg
// ]);

guineaPig([
    "1",//kg food
    "1.5",//kg hay
    "3",//kg cover
    "1.5"//pig weight kg
]);