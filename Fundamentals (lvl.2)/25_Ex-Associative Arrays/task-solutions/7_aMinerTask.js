function minerTask(input) {

    let resources = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (resources[resource]) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }

    for (let resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);