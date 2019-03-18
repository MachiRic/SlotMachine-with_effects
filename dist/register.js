class Register {
    constructor(){
    }

    StoreData(number, bet, balance) {
        var string = {
            Bet: bet.toString(),
            Balance: balance.toString(),
            Number: number.toString()
        }
        console.log("TEST", number, "Bet:", bet, "Balance:", balance)
        fetch("http://localhost:5000/save-data", {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(string)
        }).then(console.log("sent!"))
    }

}
