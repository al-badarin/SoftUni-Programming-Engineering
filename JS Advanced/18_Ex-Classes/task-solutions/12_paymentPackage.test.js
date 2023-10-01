let PaymentPackage = require('./12_paymentPackage');
let { assert } = require('chai');

describe('PaymentPackage', () => {
    describe('create instance', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Todor', 10);
        });

        it('name should be correct', () => {
            assert.equal(paymentPackage._name, 'Todor', 'name has correct set to Todor');
        });

        it('value should be correct', () => {
            assert.equal(paymentPackage._value, 10, 'value has correct set to 10');
        });

        it('vat should be correct value', () => {
            assert.equal(paymentPackage._VAT, 20, 'default value is set correct');
            assert.equal(typeof (paymentPackage._VAT), 'number', 'vat is correct type');
        });

        it('active should be correct', () => {
            assert.equal(paymentPackage._active, true, 'active has correct initial value true');
            assert.equal(typeof (paymentPackage._active), 'boolean', 'active has correct type');
        });
    });

    describe('test getters', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Todor', 10);
        });
        it('instance should be return correct name', () => {
            assert.equal(paymentPackage.name, 'Todor');
        });

        it('should return correct value', () => {
            assert.equal(paymentPackage.value, 10);
        });

        it('test get vat', () => {
            assert.equal(paymentPackage.VAT, 20);
        });

        it('test active', () => {
            assert.equal(paymentPackage.active, true);
        });
    });

    describe('Test stters', () => {
        it('set incorrect type for name', () => {
            assert.throws(() => { new PaymentPackage(10, 10) }, 'Name must be a non-empty string');
        });

        it('set empty name', () => {
            assert.throws(() => { new PaymentPackage('', 10) }, 'Name must be a non-empty string');
        });

        it('set correct value', () => {
            let paymentPackage = new PaymentPackage('Todor', 10);
            assert.equal(paymentPackage.name, 'Todor');
            paymentPackage.name = 'Gosho';
            assert.equal(paymentPackage.name, 'Gosho');
        });

        it('set incorrect value type', () => {
            assert.throws(() => { new PaymentPackage('Todor', '10') }, 'Value must be a non-negative number');
        });

        it('set negative value', () => {
            assert.throws(() => { new PaymentPackage('Todor', -50) }, 'Value must be a non-negative number');
        });

        it('set correct value', () => {
            let paymentPackage = new PaymentPackage('Todor', 10);
            assert.equal(paymentPackage.value, 10);
            paymentPackage.value = 50;
            assert.equal(paymentPackage.value, 50);
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0);
        });

        it('set incorrect VAT type', () => {
            let paymentPackage = new PaymentPackage('Todor', 10);
            assert.throws(() => { paymentPackage.VAT = 'Gosho' }, 'VAT must be a non-negative number');
        });

        it('set incorrect VAT value', () => {
            let paymentPackage = new PaymentPackage('Todor', 10);
            assert.throws(() => { paymentPackage.VAT = '-100' }, 'VAT must be a non-negative number');
        });

        it('set correct VAT value', () => {
            let paymentPackage = new PaymentPackage('Todor', 10);
        });

        it('set incorrect active value', () => {
            let paymentPackage = new PaymentPackage('Todor', 10);
            assert.throws(() => { paymentPackage.active = 'Gosho' }, 'Active status must be a boolean');
        });

        it('set correct active value', () => {
            let paymentPackage = new PaymentPackage('Todor', 10);
            assert.equal(paymentPackage.active, true);
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false);
        });
    });

    describe('toString', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Todor', 10);
        });

        it('test active state', () => {
            const output = [
                `Package: Todor`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
            ].join('\n');
            assert.equal(paymentPackage.toString(), output);
        });
    });
});