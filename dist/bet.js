class Bet {
    constructor(container) {
        this.clicks = 0;
        this.container = container;
        this.div = document.createElement("div");
        this.lowest = document.createElement("button");
        this.lowest.className = "btn btn-danger btn-lg";
        this.lowest.id = "lowest";
        this.lowest.style="margin-right:10px;";
        this.lowest.innerHTML = "10kr";
        this.lowest.value = "10";
        this.lowest.disabled =false;

        this.medium = document.createElement("button");
        this.medium.className = "btn btn-danger btn-lg";
        this.medium.id = "medium";
        this.medium.innerHTML = '25kr';
        this.medium.value = '25';
        this.medium.style="margin-right:10px";
        this.medium.disabled =false;

        this.highest = document.createElement("button");
        this.highest.className = "btn btn-danger btn-lg";
        this.highest.id = "highest";
        this.highest.innerHTML = '50kr';
        this.highest.value = '50';
        this.highest.style="margin-right:10px;";
        this.highest.disabled =false;

        this.div.appendChild(this.lowest);
        this.div.appendChild(this.medium);
        this.div.appendChild(this.highest);
        this.container.appendChild(this.div);

        this.lowest.addEventListener('click', () => {
            this.clicks += 1;
            document.getElementById("randomizeButton").disabled = false;
            this.medium.disabled =false;
            this.highest.disabled =false;
            this.lowest.disabled =true;
            this.bet_money=this.lowest.value

        });

        this.medium.addEventListener('click', () => {
            this.clicks += 1;
            document.getElementById("randomizeButton").disabled = false;
            this.lowest.disabled =false;
            this.highest.disabled =false;
            this.medium.disabled =true;
            this.bet_money=this.medium.value
                });

        this.highest.addEventListener('click', () => {
            this.clicks += 1;
            document.getElementById("randomizeButton").disabled = false;
            this.lowest.disabled =false;
            this.medium.disabled =false;
            this.highest.disabled =true;
            this.bet_money=this.highest.value
                });
    }

    bet() {
        //If statement so that you can't bet money than you have in the bank
        /*if (this.input.value > max_bet) {
            this.input.value = max_bet;
        }
        //Max bet for any round
        else if (this.input.value > 200) {
            this.input.value = 200;
        }*/
        return [this.bet_money,this.clicks];
    }

    unable(){
        this.lowest.disabled =true;
        this.medium.disabled =true;
        this.highest.disabled =true;
    }

    able(){
        this.lowest.disabled =false;
        this.medium.disabled =false;
        this.highest.disabled =false;
    }

    setClickstoZero(){
        this.clicks = 0;
    }
}