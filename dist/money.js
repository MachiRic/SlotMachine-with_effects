class Money {
    constructor() {

    }

    Win(bet, ind, price_header, price_text, user_id) {
        //Emptying the HTML tags
        var newLine = "\r\n"
        this.Empty(price_header);
        this.Empty(price_text);
        this.when_win = "YOU WIN!"

        //Filling the HTML tags with the correct content and 
        //calculating the price money
        if (ind == 15) {
            let money = bet * 10;        
            if (bet == 50){
                this.price  = `SUPER MEGA WIN ${newLine} 10x${bet} = ${money}kr!`;
            }
            else {    
                this.price  = `MEGA WIN ${newLine} 10x${bet} = ${money}kr!`;
            }
            //startConfetti();
            alert(this.when_win+newLine+this.price)
            return [money, bet];
        }
        else if (ind == 8) {
            let money = bet * 5;
            if (bet == 50){
                this.price  = `YOU WIN! ${newLine} SUPER BIG WIN ${newLine} 5x${bet} = ${money}kr!`;
            }
            else {    
                this.price  = `YOU WIN! ${newLine} BIG WIN ${newLine} 5x${bet} = ${money}kr!`;
            }
            //startConfetti();
            alert(this.price)
            return [money, bet];
        }
        else if (ind == 12 | ind == 20) {
            let money = bet * 3;
            if (bet == 50){
                this.price  = `YOU WIN! ${newLine} SUPER WIN ${newLine} 3x${bet} = ${money}kr!`;
            }
            else {    
                this.price  = `YOU WIN! ${newLine} WIN ${newLine} 3x${bet} = ${money}kr!`;
            }
            //startConfetti();
            alert(this.price)
            return [money, bet];
        }
        else if (ind == 13 | ind == 19 | ind == 3) {
            let money = bet * 2;
            this.header = 'YOU WIN!';
            this.price = `SMALL WIN ${newLine} 2x${bet} = ${money}kr!`;
            //startConfetti();
            alert(this.header + newLine + this.price)
            return [money, bet];
        }

        else if(ind==21){
            this.Empty(price_header);
            this.Empty(price_text);
            document.getElementById("close_btn").disabled = true;
            this.header = document.createElement('h2')
            this.header.innerHTML = 'THE GAME HAS ENDED';
            this.price = document.createElement('h5');
            this.price.innerHTML = `Raise your hand and we'll get to you!`;
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
        }

        else {
            this.header = 'LOSS';
            this.price = `You lost`;
            alert(this.header+newLine+this.price)
            return [0, bet];
        }

    }

    Empty(tag) {
        while (tag.firstChild) {
            tag.removeChild(tag.firstChild);
        }
    }

}