"use strict";

describe("Account", function() {
    let account;
    beforeEach(()=> {
        account = new Account(1000)
        account.deposit(1000);
    })
    describe("constructor", function() {
        it("Account number 1000 is given so new account opens with that name", function() {
            assert.equal(account.getNumber(), 1000);
            assert.equal(account.getBalance(), 1000.0);
        })
    })
    
    
    
    describe("getNumber", function() {
        it("The getter and the field value equal for Account number", function() {
            assert.equal(account.getNumber(), account._number);
        })
    })
    
    describe("getBalance", function() {
        it("The getter and the field value equal for Account balance", function() {
            assert.equal(account.getBalance(), account._balance);
        })
    })
    
    describe("deposit", function() {
        it("amount less than 0 RangeError is thrown", function() {
            assert.throw(()=>account.deposit(-100), RangeError, "Deposit amount has to be greater than zero");
        })
    
        it("amount 0 RangeError is thrown", function() {
            assert.throw(()=>account.deposit(0), RangeError, "Deposit amount has to be greater than zero");
        })
    
        it("amount greater than 0(100) successfully deposits", function() {
            account.deposit(100);
            assert.equal(account.getBalance(), 1100);
        })
    })
    
    describe("withdraw", function() {
    
        it("amount less than 0 RangeError is thrown", function() {
            assert.throw(()=>account.withdraw(-100), RangeError, "Withdraw amount has to be greater than zero");
        })
    
        it("amount 0 RangeError is thrown", function() {
            assert.throw(()=>account.withdraw(0), RangeError, "Withdraw amount has to be greater than zero");
        })
    
        it("amount greater than 0 but less than balance successfully withdraws", function() {
            account.withdraw(100);
            assert.equal(account.getBalance(), 900);
        })

        it("amount greater than balance throws Error", function() {
            
            assert.throw(()=>account.withdraw(2100), Error, "Insufficient funds");
        })
    })

    describe("toString", function() {
        it("the output of toString method", function() {
            let strVal = "Account " + account.getNumber() + ": balance " + account.getBalance();
            assert.equal(account.toString(), strVal)
        })
    })
})

describe("SavingAccount", function() {
    describe("constructor", function() {
        it()
    })
})