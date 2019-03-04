class Money {
    constructor(balance) {
        this.balance = balance;
    }

    Win(bet, ind) {
        if (ind == 1) {
            let money = bet * 5;
            this.balance += money;
            console.log(this.balance)
            return money;
        }
        else if (ind == 2) {
            let money = bet * 2;
            this.balance += money;
            console.log(this.balance)
            return money;
        }
        else if (ind == 3) {
            let money = bet * 1.5;
            this.balance += money;
            console.log(this.balance)
            return money;
        }
        else{
            this.balance -= bet;
            console.log(this.balance)
            return bet;
        }

    }

}