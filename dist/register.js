class Register {
    constructor(){
    }

    StoreData(number, bet, balance) {
        var string = {
            Bet: bet,
            Balance: balance
        }
        console.log("TEST", number, "Bet:", bet, "Balance:", balance)
        fetch("http://localhost:5000/save-data", {
            method: "POST",
            Headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(string)
        }).then(console.log("sent!"))
    }

}
