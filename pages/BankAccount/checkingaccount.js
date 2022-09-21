class CheckingAccount extends Account{
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    getOverdraft() {
        return this._overdraft;
    }

    setOverdraft(val) {
        if (val <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        this._overdraft = val;
    }

    withdraw(amt) {
        if (amt <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amt > (this._balance + this._overdraft)) {
            throw Error("Insufficient funds");
        }
        this._balance = this.getBalance() - amt;
    }

    toString() {
        return `${super.toString()}: Overdraft ${this.getOverdraft()}`;
    }
}