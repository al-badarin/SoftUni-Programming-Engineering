const sum = require('./4_sumOfNumbers');
const expect = require('chai').expect;

describe('Sum of Numbers', () => {
    it('Should return the sum of the numbers in the array', ()=>{
        let numbers = [1,2,3,4,5];
        let expectedSum = 15;

        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    });
})