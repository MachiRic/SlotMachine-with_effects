class Register {
    constructor(){
    }

    StoreData(number, bet, balance, user_id, clicks, time) {
        var string = {
            Bet: bet.toString(),
            Balance: balance.toString(),
            Number: number.toString(),
            ID: user_id.toString(),
            Clicks: clicks.toString(),
            Time: time.toString()
        }
        console.log("TEST", number, "Bet:", bet, "Balance:", balance, "ID: ", user_id, "Clicks: ", clicks, "Time: ", time)
        fetch("http://localhost:5000/save-data", {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(string)
        }).then(console.log("sent!"))
    }

}
