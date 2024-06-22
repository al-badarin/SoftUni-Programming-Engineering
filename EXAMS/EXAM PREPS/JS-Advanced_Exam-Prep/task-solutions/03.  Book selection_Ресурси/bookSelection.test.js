const bookSelection = require('./bookSelection');
const { expect } = require('chai');

describe("bookSelection tests", function () {
    describe("isGenreSuitable tests", function () {
        it("genre is 'Thriller', age < 12", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal(`Books with Thriller genre are not suitable for kids at 11 age`);
        });
        it("genre is 'Thriller', age = 12", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        });
        it("genre is 'Horror', age < 12", function () {
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal(`Books with Horror genre are not suitable for kids at 11 age`);
        });
        it("genre is 'Horror', age = 12", function () {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });
        it("genre is other, age < 12", function () {
            expect(bookSelection.isGenreSuitable('Comics', 11)).to.equal(`Those books are suitable`);
        });
        it("genre is other, age = 12", function () {
            expect(bookSelection.isGenreSuitable('Comics', 12)).to.equal(`Those books are suitable`);
        });
        it("genre is other, age > 12", function () {
            expect(bookSelection.isGenreSuitable('Comics', 12)).to.equal(`Those books are suitable`);
        });
        it("genre is 'Thriller', age > 12", function () {
            expect(bookSelection.isGenreSuitable('Comics', 13)).to.equal(`Those books are suitable`);
        });
        it("genre is 'Horror', age > 12", function () {
            expect(bookSelection.isGenreSuitable('Comics', 13)).to.equal(`Those books are suitable`);
        });
    });

    describe("isItAffordable tests", function () {
        it("invalid input - price should be a number", function () {
            expect(() => bookSelection.isItAffordable('20', 30)).to.throw("Invalid input");
        });
        it("invalid input - budget should be a number", function () {
            expect(() => bookSelection.isItAffordable(20, '30')).to.throw("Invalid input");
        });
        it("invalid input - price and budget should be a numbers", function () {
            expect(() => bookSelection.isItAffordable('20', '30')).to.throw("Invalid input");
        });
        it("valid input - budget not enough - < 0", function () {
            expect(bookSelection.isItAffordable(20, 10)).to.equal("You don't have enough money");
        });
        it("valid input - budget is enough; money left = 0", function () {
            expect(bookSelection.isItAffordable(20, 20)).to.equal(`Book bought. You have 0$ left`);
        });
        it("valid input - budget is enough; money left > 0", function () {
            expect(bookSelection.isItAffordable(20, 30)).to.equal(`Book bought. You have 10$ left`);
        });
    });

    describe("suitableTitles tests", function () {
        it("invalid input - 'books' should be an array", function () {
            expect(() => bookSelection.suitableTitles('books', 'Thriller')).to.throw("Invalid input");
        });
        // it("invalid input - 'books' should not be an empty array", function () {
        //     expect(() => bookSelection.suitableTitles([], 'Thriller')).to.throw("Invalid input");
        // });
        it("invalid input - 'wantedGenre' should be a string", function () {
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 123)).to.throw("Invalid input");
        });
        // it("invalid input - 'wantedGenre' should not be an empty string", function () {
        //     expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], '')).to.throw("Invalid input");
        // });
        it("valid input", function () {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Superman", genre: "Comics" }], 'Thriller')).to.deep.equal(["The Da Vinci Code"]);
        });
    });
});
