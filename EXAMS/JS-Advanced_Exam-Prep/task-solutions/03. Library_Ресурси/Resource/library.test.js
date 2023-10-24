const library = require('./library');
const { assert, expect } = require('chai');

describe("Library Tests", function () {
    describe("calcPriceOfBook tests", function () {
        it("invalid input - nameOfBook is not a string", function () {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw("Invalid input");
        });
        it("invalid input - year is not a number", function () {
            expect(() => library.calcPriceOfBook('1', '1')).to.throw("Invalid input");
        });
        it("valid input - year is less than 1980", function () {
            expect(library.calcPriceOfBook('Book', 1979)).to.equal(`Price of Book is 10.00`);
        });
        it("valid input - year is equal of 1980", function () {
            expect(library.calcPriceOfBook('Book', 1980)).to.equal(`Price of Book is 10.00`);
        });
        it("valid input - year is greater than 1980", function () {
            expect(library.calcPriceOfBook('Book', 1981)).to.equal(`Price of Book is 20.00`);
        });
    });

    describe("findBook tests", function () {
        it("invalid input - empty array", function () {
            expect(() => library.findBook([], 'Book')).to.throw("No books currently available");
        });
        it("valid input - available 'desiredBook' in the array", function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal("We found the book you want.");
        });
        it("valid input - not found 'desiredBook' in the array", function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Book')).to.equal("The book you are looking for is not here!");
        });
    });

    describe("arrangeTheBooks tests", function () {
        it("invalid input - countBooks must be an integer number", function () {
            expect(() => library.arrangeTheBooks('1')).to.throw("Invalid input");
        });
        it("invalid input - countBooks must be a positive number", function () {
            expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input");
        });
        it("valid input - library holds exactly 40 books", function () {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });
        it("valid input - library holds less than 40 books", function () {
            expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        });
        it("valid input - library holds more than 40 books", function () {
            expect(library.arrangeTheBooks(45)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
    });

});
