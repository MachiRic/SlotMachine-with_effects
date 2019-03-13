class Bet {
    constructor(container) {
        this.container = container;
        this.div = document.createElement("div");
        this.confirm_btn = document.createElement("button");
        this.confirm_btn.className = "btn btn-danger btn-lg";
        this.confirm_btn.innerHTML = "confirm bet";
        this.input = document.createElement("input");
        this.input.type = "number";
        this.input.min = "1";
        this.input.id = "input_bet";
        this.input.defaultValue = 100;
        this.div.appendChild(this.input);
        this.container.appendChild(this.div);
    }

    bet(max_bet){
        //If statement so that you can't bet money than you have in the bank
        if (this.input.value>max_bet){
            this.input.value=max_bet;
        }
        //Max bet for any round
        else if(this.input.value >200){
            this.input.value=200;
        }
        return this.input.value;
}

}