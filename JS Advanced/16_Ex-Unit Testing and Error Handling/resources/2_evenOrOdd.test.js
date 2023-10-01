const isOddOrEven = require('./2_evenOrOdd');
const { assert, expect } = require('chai');

describe('isOddOrEven function tests', () => {
    //invalid input tests
    it('Should return undefined if the parameter is number', () => {
        assert.equal(isOddOrEven(1), undefined);
    });
    it('Should return undefined if the parameter is object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('Should return undefined if the parameter is array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('Should return undefined if the parameter is null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });
    it('Should return undefined if the parameter is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });

    //valid input tests
    it('Should return even as a result', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });

    it('Should return odd as a result', () => {
        assert.equal(isOddOrEven('Hello'), 'odd');
    });
});


