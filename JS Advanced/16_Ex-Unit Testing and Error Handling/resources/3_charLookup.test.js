const lookupChar = require('./3_charLookup');
const { assert, expect } = require('chai');

describe('lookupChar function tests', () => {
    it('Should return undefined if the first parameter is NOT a string or the second parameter is NOT a number', () => {
        assert.equal(lookupChar('string', 'string'), undefined);
        assert.equal(lookupChar(1, 1), undefined);
        assert.equal(lookupChar(1, 'string'), undefined);
        assert.equal(lookupChar('string', 1.1), undefined);
    });

    it('Should return "Incorrect index" if both parameters are of the correct type but the value of the index is incorrect ', () => {
        assert.equal(lookupChar('string', -1), "Incorrect index");
        assert.equal(lookupChar('string', 10), "Incorrect index");
        assert.equal(lookupChar('', 0), "Incorrect index");
        //empty string

    });

    it('Should return the character at the specified index in the string if both parameters have correct types and values', () => {
        assert.equal(lookupChar('string', 1), 't');
    });
});


//SOLUTION WITH 'EXPECT'
describe("look up char", () => {
    it('should return undefined when the first input is not a string', () => {
        //arrange phase
        let expected = undefined;
        //assert and act phase
        expect(lookupChar(0, 0)).to.equal(expected);
        expect(lookupChar(undefined, 0)).to.equal(expected);
        expect(lookupChar(null, 0)).to.equal(expected);
        expect(lookupChar([], 0)).to.equal(expected);
        expect(lookupChar({}, 0)).to.equal(expected);
    });

    it('should return undefined when the second input is not an intiger', () => {
        //arrange phase
        let expected = undefined;
        //assert  and act phase
        expect(lookupChar('hello', "1")).to.equal(expected);
        expect(lookupChar('hello', [])).to.equal(expected);
        expect(lookupChar('hello', {})).to.equal(expected);
        expect(lookupChar('hello', null)).to.equal(expected);
        expect(lookupChar('hello', 4.4)).to.equal(expected);
        expect(lookupChar('hello', '')).to.equal(expected);
    });

    it('should return "Incorrect Index" if the second param is out of range to the strings length', () => {
        //arrange phase
        let expected = "Incorrect index";
        //assert and act phase
        expect(lookupChar('hello', -1)).to.equal(expected);
        expect(lookupChar('hello', 5)).to.equal(expected);
        expect(lookupChar('hello', 100)).to.equal(expected);
        expect(lookupChar('hello', -100)).to.equal(expected);
        expect(lookupChar('', 0)).to.equal(expected);
    });

    it('should return the char of the string at the given index - happy case', () => {
        //assert and act phase
        expect(lookupChar('hello', 0)).to.equal('h');
        expect(lookupChar('hello', 4)).to.equal('o');
        expect(lookupChar('hello', 3)).to.equal('l');
    });
});