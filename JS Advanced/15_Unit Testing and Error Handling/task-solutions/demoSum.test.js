const sum = require('./demoSum');
const expect = require('chai').expect;


describe('Test group #1', () => {
    it('should return 6 when the numbers are summed', () => {
        let numberA = 1
        let numberB = 2;
        let numberC = 3;
        let expectedSum = 6;
        let actualSum = sum(numberA, numberB, numberC);
        expect(actualSum).to.be.equal(expectedSum);
    });
});