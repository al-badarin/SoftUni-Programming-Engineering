function composeCalorieObject(input: string[]): void {
  let calorieObject: { [key: string]: number } = {};

  for (let i = 0; i < input.length; i += 2) {
    let food: string = input[i];
    let calories: number = parseInt(input[i + 1]);

    calorieObject[food] = calories;
  }

  console.log(calorieObject);
}

// Test the function
composeCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
composeCalorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);