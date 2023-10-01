const isSymmetric = require('./5_checkforSymmetry');
const { assert, expect } = require('chai');
// const expect = require('chai').expect;

describe('isSymmetric function tests', () => {
    it('Should take an array as an argument', () => {
        let arrayInput = ['a', 'b', 'c'];
        expect(arrayInput).to.be.an('array');
    });

    it('Should return false if the argument is not an array', () => {
        assert.equal(isSymmetric(1), false);
        assert.equal(isSymmetric({}), false);
        assert.equal(isSymmetric('1'), false);
        assert.equal(isSymmetric(null), false);
        assert.equal(isSymmetric(undefined), false);
        assert.equal(isSymmetric(NaN), false);
    });

    it('Should return true if the input array is symmetric', () => {
        let array = ['a', 'b', 'c'];
        expect(array).to.equal(array.reverse(), true);
    });

    it('Should return false if the input array is NOT symmetric', () => {
        let array = ['a', 'b', 'c'];
        expect(array).to.not.equal(['c', 'a', 'b'], false);
        expect(array).to.equal(array, false)
    });
});