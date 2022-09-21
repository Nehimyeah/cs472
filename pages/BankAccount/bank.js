class Bank{
    constructor() {
        this.accounts = [];
    }

    static nextNumber = 1000;

    addAccount() {
        this.accounts.push(new Account(Bank.nextNumber++))
    }

    addSavingsAccount(interest) {
        this.accounts.push(new SavingsAccount(Bank.nextNumber++, interest))
    }

    addCheckingAccount(overdraft) {
        this.accounts.push(new CheckingAccount(Bank.nextNumber++, overdraft));
    }

    closeAccount(number) {
        this.accounts = this.accounts.filter(c=>c.getNumber() !== number);
    }

    accountReport() {
        let report = "";
        this.accounts.forEach(c=>report += c.toString() + "\n");
        return report;
    }

}