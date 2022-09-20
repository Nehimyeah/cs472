class SavingAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(amt) {
        if (amt <= 0)
            throw new RangeError("Interest can't be less than 1");
        if (amt > 50) 
            throw new RangeError("Interest can't be more than 50");
        
        this._interest = amt;
    }

    addInterest() {
        let addedValue = this.getBalance() * this.getInterest() / 100;
        this.deposit(this.getBalance() + addedValue);
    }

    toString() {
        let str = super.toString();
        return `${str} : interest " + ${this._interest}`;
    }
}