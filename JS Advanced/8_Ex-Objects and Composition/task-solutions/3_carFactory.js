function carFactory(input) {

    let resultCars = {};
    let engine = {};
    let carriage = {};

    resultCars.model = input.model;

    if (input.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (input.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (input.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    carriage.type = input.carriage;
    carriage.color = input.color;

    if (input.wheelsize % 2 === 0) {
        input.wheelsize--;
    }

    resultCars.engine = engine;
    resultCars.carriage = carriage;
    resultCars.wheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];

    return resultCars;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});