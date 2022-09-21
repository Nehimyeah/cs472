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
    let account;
    beforeEach(()=> account = new SavingsAccount(1000, 2.5));
    describe("constructor", function() {
        describe("initialize SavingsAccounts with number: 1000 and 2.5 interest", function() {
            let acc;
            before(()=>acc = new SavingsAccount(1000, 2.5))
            it("account number is 1000", function() {
                assert.equal(acc.getNumber(), 1000);
            })
            
            it("initial balance is 0.0", function() {
                assert.equal(acc.getBalance(), 0.0)
            })

            it("interest amount is 2.5", function() {
                assert.equal(acc._interest, 2.5)
            });
            
        });
    });

    describe('getInterest', function() {
        it("interest is 2.5 given during initialization", function() {
            assert.equal(account.getInterest(), 2.5)
        })
    })

    describe("setInterest", function() {
        it('set interest to 3.0', function() {
            account.setInterest(3.0);
            assert.equal(account.getInterest(), 3.0);
        })
    })

    describe("addInterest", function() {
        it("add interest of 2.5 on 100 dollars initial", function() {
            account.deposit(100);
            account.addInterest();
            assert.equal(account.getBalance(), 102.5)
        })
    })

    describe('toString', function() {
        it('string with initial account setup of number: 1000, balance: 0, interest: 2.5', function() {
            assert.equal(account.toString(), "Account 1000: balance 0: Interest 2.5");
        })
    })
})


describe("CheckingAccount", function() {
    let account;
    beforeEach(()=> account = new CheckingAccount(1000, 500));
    describe("constructor", function() {
        describe("initialize CheckingAccount with number: 1000 and 500 interest", function() {
            let acc;
            before(()=>acc = new CheckingAccount(1000, 500))
            it("account number is 1000", function() {
                assert.equal(acc.getNumber(), 1000);
            })
            
            it("initial balance is 0.0", function() {
                assert.equal(acc.getBalance(), 0.0)
            })

            it("overdraft amount is 500", function() {
                assert.equal(acc._overdraft, 500)
            });
            
        });
    });

    describe('getOverdraft', function() {
        it("overdraft is 500 given during initialization", function() {
            assert.equal(account.getOverdraft(), 500)
        })
    })

    describe("setOverdraft", function() {
        it('set overdraft to 600', function() {
            account.setOverdraft(600);
            assert.equal(account.getOverdraft(), 600);
        })
    })

    describe("withdraw", function() {
        it("withdraw more than available but less than allowed overdraft", function() {
            account.withdraw(100);
            assert.equal(account.getBalance(), -100);
        })
        it("withdraw more than available and more than allowed overdraft", function() {
            assert.throws(()=>account.withdraw(600), Error, "Insufficient funds");
        })
    })

    describe('toString', function() {
        it('string with initial account setup of number: 1000, balance: 0, overdraft: 500', function() {
            assert.equal(account.toString(), "Account 1000: balance 0: Overdraft 500");
        })
    })
})




// let a = new Bank();
// a.addAccount();
// a.addSavingsAccount(2.5);
// a.addAccount();
// a.addCheckingAccount(500);
// a.closeAccount(1002);
// console.log(a.accountReport());