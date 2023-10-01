function zoo(input){

    let foodDogs = Number(input[0]);
    let foodCats = Number(input[1]);
    let sum = (foodDogs * 2.50) + (foodCats * 4);

    let res = `${sum} lv.`;
    console.log(res);
}

zoo([5, 4])