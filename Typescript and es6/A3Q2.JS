class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
class SavingsAccount extends Account {
    constructor(id, name, balance, interest) {
        super(id, name, balance);
        this.interest = interest;
    }
    totalBalance() {
        let newBalance = this.balance * this.interest;
        this.balance = this.balance + newBalance;
        return this.balance
    }
}
class CurrentAccount extends Account {
    constructor(id, name, balance, cash_credit) {
        super(id, name, balance);
        this.cash_credit = cash_credit;
    }
    totalBalance() {
        let newBalance = this.balance * this.cash_credit;
        this.balance = this.balance + newBalance;
        return this.balance;
    }
}
var saving = new SavingsAccount(" 123456123456", "indrajeet", 200000, 1.5);
var current = new CurrentAccount(" 654321654321", "bhanu", 500000, 0.5);
console.log(saving.totalBalance());
console.log(current.totalBalance());