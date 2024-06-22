const movieTheater = require('./03. Movie_Theater');
const {assert, expect} = require('chai');

describe('movieTheater function tests', ()=>{
    describe('ageRestrictions tests', ()=>{
        it('value is "G"', ()=>{
            expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
        });
        it('value is "PG"', ()=>{
            expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });
        it('value is "R"', ()=>{
            expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        });
        it('value is "NC-17"', ()=>{
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        });
        it('if value is something else', ()=>{
            expect(movieTheater.ageRestrictions('smth')).to.equal(`There are no age restrictions for this movie`);
        });
    });


    describe('moneySpent tests', ()=>{
        it('invalid input - "tickets" must be a number', ()=>{
            expect(()=>movieTheater.moneySpent('5',[],[])).to.throw("Invalid input");
        });
        it('invalid input - "food" must be an array', ()=>{
            expect(()=>movieTheater.moneySpent(5,'food',[])).to.throw("Invalid input");
        });
        it('invalid input - "drinks" must be an array', ()=>{
            expect(()=>movieTheater.moneySpent(5,[],'drink')).to.throw("Invalid input");
        });
        it('valid input - total cost is bigger than 50.00', ()=>{
            expect(movieTheater.moneySpent(3,['Nachos'],['Soda'])).to.equal(`The total cost for the purchase with applied discount is 42.80`);
        });
        it('valid input - total cost is less than 50.00', ()=>{
            expect(movieTheater.moneySpent(1,['Popcorn'],['Water'])).to.equal(`The total cost for the purchase is 21.00`);
        });
        it('valid input - total cost is equal exactly of 50.00', ()=>{
            expect(movieTheater.moneySpent(2,['Nachos', 'Nachos'],['Water', 'Soda','Water', 'Soda'])).to.equal(`The total cost for the purchase is 50.00`);
        });
    });


    describe('reservation tests', ()=>{
        it('invalid input - "neededSeatsCount" must be a number', ()=>{
            expect(()=>movieTheater.reservation([],'5')).to.throw("Invalid input");
        });
        // it('invalid input - "neededSeatsCount" must be a positive number', ()=>{
        //     expect(()=>movieTheater.reservation([],-2)).to.throw("Invalid input");
        // });
        // it('invalid input - "neededSeatsCount" must be higher than 0', ()=>{
        //     expect(()=>movieTheater.reservation([],0)).to.throw("Invalid input");
        // });
        it('invalid input - "rowsArray" must be an array', ()=>{
            expect(()=>movieTheater.reservation('5',['5'])).to.throw("Invalid input");
        });
        it('valid input - row with the largest number', ()=>{
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }, { rowNumber: 3, freeSeats: 2 }], 7)).to.equal(1);
        });
        
    });
});
