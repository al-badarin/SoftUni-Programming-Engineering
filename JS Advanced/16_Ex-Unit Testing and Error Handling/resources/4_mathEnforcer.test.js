const mathEnforcer = require('./4_mathEnforcer');
const { assert, expect } = require('chai');

describe('mathEnforcer functions tests', () => {
    describe('addFive function tests', () => {
        //incorrect inputs
        it('Should return undefined if the parameter is not a number', () => {
            assert(mathEnforcer.addFive('string') === undefined);
            assert(mathEnforcer.addFive([]) === undefined);
            assert(mathEnforcer.addFive({}) === undefined);
            assert(mathEnforcer.addFive(undefined) === undefined);
            assert(mathEnforcer.addFive(null) === undefined);
        });

        //correct inputs
        it('Should return the number increased by 5 if the parameter is a number', () => {
            assert(mathEnforcer.addFive(10) === 15);
            assert(mathEnforcer.addFive(-5) === 0);
            assert(mathEnforcer.addFive(10.5) === 15.5);
        });
    });

    describe('substractTen function tests', () => {
        //incorrect inputs
        it('Should return undefined if the parameter is not a number', () => {
            assert(mathEnforcer.subtractTen('string') === undefined);
            assert(mathEnforcer.subtractTen([]) === undefined);
            assert(mathEnforcer.subtractTen({}) === undefined);
            assert(mathEnforcer.subtractTen(undefined) === undefined);
            assert(mathEnforcer.subtractTen(null) === undefined);
        });

        //correct inputs
        it('Should return the number decreased by 10 if the parameter is a number', () => {
            assert(mathEnforcer.subtractTen(10) === 0);
            assert(mathEnforcer.subtractTen(-5) === -15);
            assert(mathEnforcer.subtractTen(20.5) === 10.5);
        });
    });

    describe('sum function tests', () => {
        //incorrect inputs
        it('Should return undefined if the FIRST parameter is not a number', () => {
            assert(mathEnforcer.sum('string', 1) === undefined);
            assert(mathEnforcer.sum([], 1) === undefined);
            assert(mathEnforcer.sum({}, 1) === undefined);
            assert(mathEnforcer.sum(undefined, 1) === undefined);
            assert(mathEnforcer.sum(null, 1) === undefined);
        });

        it('Should return undefined if the SECOND parameter is not a number', () => {
            assert(mathEnforcer.sum(1, 'string') === undefined);
            assert(mathEnforcer.sum(1, []) === undefined);
            assert(mathEnforcer.sum(1, {}) === undefined);
            assert(mathEnforcer.sum(1, undefined) === undefined);
            assert(mathEnforcer.sum(1, null) === undefined);
        });

        //correct inputs
        it('Should return the the sum of the two numbers', () => {
            assert(mathEnforcer.sum(10, 10) === 20);
            assert(mathEnforcer.sum(10, -5) === 5);
            assert(mathEnforcer.sum(10.5, 10.5) === 21);
        });
    });
});


