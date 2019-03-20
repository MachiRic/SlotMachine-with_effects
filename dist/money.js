class Money {
    constructor() {

    }

    Win(bet, ind, price_header, price_text, user_id) {
        //Emptying the HTML tags
        this.Empty(price_header);
        this.Empty(price_text);

        //Filling the HTML tags with the correct content and 
        //calculating the price money
        if (ind == 15) {
            let money = bet * 10;
            this.header = document.createElement('h2')
            this.header.innerHTML = `MEGA WIN`;
            this.price = document.createElement('h5');
            this.price.innerHTML = `You won 10x${bet} = ${money}kr!`;
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            maxParticleCount = 1500;
            startConfetti();
            return [money, bet];
        }
        else if (ind == 8) {
            let money = bet * 5;
            this.header = document.createElement('h2')
            this.header.innerHTML = 'BIG WIN';
            this.price = document.createElement('h5');
            this.price.innerHTML = `You won 5x${bet} = ${money}kr!`;
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            maxParticleCount = 700;
            startConfetti();
            return [money, bet];
        }
        else if (ind == 12 | ind == 20) {
            let money = bet * 3;
            this.header = document.createElement('h2')
            this.header.innerHTML = 'WIN';
            this.price = document.createElement('h5');
            this.price.innerHTML = `You won 3x${bet} = ${money}kr!`;
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            maxParticleCount = 300;
            startConfetti();
            return [money, bet];
        }
        else if (ind == 13 | ind == 19 | ind == 3) {
            let money = bet * 2;
            this.header = document.createElement('h2')
            this.header.innerHTML = 'SMALL WIN';
            this.price = document.createElement('h5');
            this.price.innerHTML = `You won 2x${bet} = ${money}kr!`;
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            maxParticleCount = 100;
            startConfetti();
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
            this.header = document.createElement('h2')
            this.header.innerHTML = 'LOSS';
            this.price = document.createElement('h5');
            this.price.innerHTML = `You lost`;
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            return [0, bet];
        }

    }

    Empty(tag) {
        while (tag.firstChild) {
            tag.removeChild(tag.firstChild);
        }
    }

}