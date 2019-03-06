class Money {
    constructor() {
    
    }

    Win(bet, ind) {
        if (ind == 1) {
            let money = bet * 5;
            return money;
        }
        else if (ind == 2) {
            let money = bet * 2;
            return money;
        }
        else if (ind == 3) {
            let money = bet * 1.5;
            return money;
        }
        else{
            return -bet;
        }

    }

}