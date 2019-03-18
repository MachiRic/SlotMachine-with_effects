class Money {
    constructor() {

    }

    Win(bet, ind,price_header, price_text) {
        //Filling the HTML tags with the correct content and 
        //calculating the price money
        if (ind == 4) {
            let money = bet * 5;
            this.price= `You win ${money}`;
            alert(this.price)
            btn.disabled = false;
            return [money, bet];
        }
        else if (ind == 3) {
            let money = bet * 2;
            this.price= `You win ${money}`;
            alert(this.price)
            btn.disabled = false;
            return [money, bet];
        }
        else if (ind == 5) {
            let money = bet * 1.5;
            this.price= `You win ${money}`;
            alert(this.price)
            btn.disabled = false;
            return [money, bet];
        }
        else {
            this.header = document.createElement('h2')
            this.price= `You lost ${-bet}`;
            alert(this.price)
            btn.disabled = false;
            return [-bet, bet];
        }

    }

}