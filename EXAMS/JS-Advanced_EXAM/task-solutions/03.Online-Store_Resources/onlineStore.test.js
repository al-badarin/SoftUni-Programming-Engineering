let onlineStore = require('./onlineStore');
let { expect, aquire } = require('chai');

describe('onlineStore function tests', () => {
    describe('isProductAvailable tests', () => {
        it('should throw an error if the input is invalid - "product" must be a string', () => {
            expect(() => onlineStore.isProductAvailable(1, 2)).to.throw("Invalid input.");
        });
        it('should throw an error if the input is invalid - "stockQuantity" must be a number', () => {
            expect(() => onlineStore.isProductAvailable('ball', '2')).to.throw("Invalid input.");
        });
        it('"stockQuantity" is < 0', () => {
            expect(onlineStore.isProductAvailable('ball', -1)).to.equal(`Sorry, ball is currently out of stock.`);
        });
        it('"stockQuantity" is = 0', () => {
            expect(onlineStore.isProductAvailable('ball', 0)).to.equal(`Sorry, ball is currently out of stock.`);
        });
        it('"stockQuantity" is > 0', () => {
            expect(onlineStore.isProductAvailable('ball', 1)).to.equal(`Great! ball is available for purchase.`);
        });
    });


    describe('canAffordProduct tests', () => {
        it('should throw an error if the input is invalid - "productPrice" must be a number', () => {
            expect(() => onlineStore.canAffordProduct('1', 2)).to.throw("Invalid input.");
        });
        it('should throw an error if the input is invalid - "accountBalance" must be a number', () => {
            expect(() => onlineStore.canAffordProduct(1, '2')).to.throw("Invalid input.");
        });
        it('result is < 0', () => {
            expect(onlineStore.canAffordProduct(2, 1)).to.equal("You don't have sufficient funds to buy this product.");
        });
        it('result is = 0', () => {
            expect(onlineStore.canAffordProduct(2, 2)).to.equal(`Product purchased. Your remaining balance is $0.`);
        });
        it('result is > 0', () => {
            expect(onlineStore.canAffordProduct(1, 2)).to.equal(`Product purchased. Your remaining balance is $1.`);
        });
    });


    describe('getRecommendedProducts tests', () => {
        it('should throw an error if the input is invalid - "productList" must be an array of objects', () => {
            expect(() => onlineStore.getRecommendedProducts('1', "Photography")).to.throw("Invalid input.");
        });
        it('should throw an error if the input is invalid - "category" must be a string', () => {
            expect(() => onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], 2)).to.throw("Invalid input.");
        });
        it('product names that match the specified category', () => {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Ball", category: "Sports" }], 'Sports')).to.equal(`Recommended products in the Sports category: Ball`);
        });
        it('product names that NOT match the specified category', () => {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Ball", category: "Sports" }], 'Clothes')).to.equal(`Sorry, we currently have no recommended products in the Clothes category.`);
        });
    });
});