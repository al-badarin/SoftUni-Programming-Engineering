let chooseYourCar = require('./chooseYourCar');
let { expect, aquire } = require('chai');

describe('chooseYourCar function tests', () => {
    describe('choosingType tests', () => {
        it('should throw an error with invalid car type', () => {
            expect(() => chooseYourCar.choosingType('BMW', 'black', 2000)).to.throw("This type of car is not what you are looking for.");
        });
        it('should throw an error with invalid year - year less than 1900', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'black', 1800)).to.throw("Invalid Year!");
        });
        it('should throw an error with invalid year - year more than 2022', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'black', 2023)).to.throw("Invalid Year!");
        });
        it('valid data - year greater than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'black', 2011)).to.equal("This black Sedan meets the requirements, that you have.")
        });
        it('valid data - year equal to 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'black', 2010)).to.equal("This black Sedan meets the requirements, that you have.")
        });
        it('valid data - year below 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'black', 2009)).to.equal("This Sedan is too old for you, especially with that black color.")
        });
    });


    describe('brandName tests', () => {
        it('should throw an error with invalid input - "brands" must be an array', () => {
            expect(() => chooseYourCar.brandName('BMW', 1)).to.throw("Invalid Information!");
        });
        it('should throw an error with invalid input - "brandIndex" must be a number', () => {
            expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Opel'], '1')).to.throw("Invalid Information!");
        });
        it('should throw an error with invalid input - "brandIndex" must be a number inside the limits of the array', () => {
            expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Opel'], 4)).to.throw("Invalid Information!");
        });
        it('should throw an error with invalid input - "brandIndex" must be a number inside the limits of the array - array length > 0', () => {
            expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Opel'], -1)).to.throw("Invalid Information!");
        });
        it('should remove an element from the array on the specified index', () => {
            expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Opel'], 1)).to.equal('BMW, Opel');
        });
    });


    describe('carFuelConsumption tests', () => {
        it('should throw an error with invalid input - "distanceInKilometers" must be a number', () => {
            expect(() => chooseYourCar.carFuelConsumption('10', 20)).to.throw("Invalid Information!");
        });
        it('should throw an error with invalid input - "distanceInKilometers" must be a positive number', () => {
            expect(() => chooseYourCar.carFuelConsumption(-10, 20)).to.throw("Invalid Information!");
        });
        it('should throw an error with invalid input - "consumptedFuelInLitres" must be a number', () => {
            expect(() => chooseYourCar.carFuelConsumption(10, '20')).to.throw("Invalid Information!");
        });
        it('should throw an error with invalid input - "consumptedFuelInLitres" must be a positive number', () => {
            expect(() => chooseYourCar.carFuelConsumption(10, -20)).to.throw("Invalid Information!");
        });
        it('should calculate car fuel consumption - burns too much - > 7L', () => {
            //by dividing the fuel consumption by 100 and then multiply by distance
            //20.00
            expect(chooseYourCar.carFuelConsumption(10, 2)).to.equal("The car burns too much fuel - 20.00 liters!");
        });
        it('should calculate car fuel consumption - efficient enough - < 7L', () => {
            //5.00 liters/100 km
            expect(chooseYourCar.carFuelConsumption(20, 1)).to.equal("The car is efficient enough, it burns 5.00 liters/100 km.");
        });
        it('should calculate car fuel consumption - efficient enough - = 7L', () => {
            //7.00 liters/100 km
            expect(chooseYourCar.carFuelConsumption(14.29, 1)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
        });
    });
});