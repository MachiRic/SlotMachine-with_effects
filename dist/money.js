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
            this.header.innerHTML = `YOU WIN!`;
            this.price = document.createElement('h5');
            if (bet==10){
                this.price.innerHTML = `MEGA WIN <br/> 10x${bet} = ${money}kr!`;
                maxParticleCount = 400;//100kr
            }
            else if (bet==25){
                this.price.innerHTML = `MEGA WIN <br/> 10x${bet} = ${money}kr!`;
                maxParticleCount = 700;//250kr
            }
            else if (bet==50){
                this.price.innerHTML = `SUPER MEGA WIN <br/> 10x${bet} = ${money}kr!`;
                maxParticleCount = 1400;//500kr
            }
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            startConfetti();
            return [money, bet];
        }
        else if (ind == 8) {
            let money = bet * 5;
            this.header = document.createElement('h2')
            this.header.innerHTML = `YOU WIN!`;
            this.price = document.createElement('h5');

            if (bet==10){
                this.price.innerHTML = `BIG WIN <br/> 5x${bet} = ${money}kr!`;
                maxParticleCount = 200;//50kr
            }
            else if (bet==25){
                this.price.innerHTML = `BIG WIN <br/> 5x${bet} = ${money}kr!`;
                maxParticleCount = 450;//125kr
            }
            else if (bet==50){
                this.price.innerHTML = `SUPER BIG WIN <br/> 5x${bet} = ${money}kr!`;
                maxParticleCount = 700;//250kr
            }
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            startConfetti();
            return [money, bet];
        }
        else if (ind == 12 | ind == 20) {
            let money = bet * 3;
            this.header = document.createElement('h2')
            this.header.innerHTML = `YOU WIN!`;
            this.price = document.createElement('h5');
            if (bet==10){
                this.price.innerHTML = `WIN <br/> 3x${bet} = ${money}kr!`;
                maxParticleCount = 150;//30kr
            }
            else if (bet==25){
                this.price.innerHTML = `WIN <br/> 3x${bet} = ${money}kr!`;
                maxParticleCount = 250;//75kr
            }
            else if (bet==50){
                this.price.innerHTML = `SUPER WIN <br/> 3x${bet} = ${money}kr!`;
                maxParticleCount = 500;//150kr
            }
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            startConfetti();
            return [money, bet];
        }
        else if (ind == 13 | ind == 19 | ind == 3) {
            let money = bet * 2;
            this.header = document.createElement('h2')
            this.header.innerHTML = `YOU WIN!`;
            this.price = document.createElement('h5');
            this.price.innerHTML = `SMALL WIN <br/> 2*${bet} = ${money}kr!`;
            price_header.appendChild(this.header);
            price_text.appendChild(this.price);
            if (bet==10){
                maxParticleCount = 100; //20kr
            }
            else if (bet==25){
                maxParticleCount = 200;//50kr
            }
            else if (bet==50){
                maxParticleCount = 400;//100kr
            }
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