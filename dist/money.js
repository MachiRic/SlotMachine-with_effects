class Money {
    constructor() {

    }

    Win(bet, ind,price_header, price_text) {
        //Emptying the HTML tags
        this.Empty(price_header);
        this.Empty(price_text);

        //Filling the HTML tags with the correct content and 
        //calculating the price money
        if (ind == 4) {
            let money = bet * 5;
            this.header = document.createElement('h2')
            this.header.innerHTML = `MEGA WIN`;
            this.price = document.createElement('h5');
            this.price.innerHTML = `You win ${money}`;
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            maxParticleCount = 1500;
            startConfetti();
            return [money, bet];
        }
        else if (ind == 3) {
            let money = bet * 2;
            this.header = document.createElement('h2')
            this.header.innerHTML = 'BIG WIN';
            this.price = document.createElement('h5');
            this.price.innerHTML = `You win ${money}`;
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            maxParticleCount = 700;
            startConfetti();
            return [money, bet];
        }
        else if (ind == 5) {
            let money = bet * 1.5;
            this.header = document.createElement('h2')
            this.header.innerHTML = 'WIN';
            this.price = document.createElement('h5');
            this.price.innerHTML = `You win ${money}`;
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            maxParticleCount = 100;
            startConfetti();
            return [money, bet];
        }
        else {
            this.header = document.createElement('h2')
            this.header.innerHTML = 'LOSS';
            this.price = document.createElement('h5');
            this.price.innerHTML = `You lost ${-bet}`;
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            return [-bet, bet];
        }

    }

    Empty(tag){
        while (tag.firstChild) {
            tag.removeChild(tag.firstChild);
        }
    }

}