function calorieObject(input) {

    let products = {};

    for (let i = 0; i < input.length; i += 2) {
        let currentProduct = input[i];
        let currentCalories = Number(input[i + 1]);
        products[currentProduct] = currentCalories;
    }
    console.log(products);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);