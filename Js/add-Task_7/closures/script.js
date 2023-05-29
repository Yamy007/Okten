listKey = []
const userCard = num => {
    let balance = 100
    let transactionLimit = 100
    let historyLogs = []

    //TODO
    let key = (Math.random(num) * 10).toFixed()

    let card = {
        getCardOptions: function () {
            return `balance$ =>  ${balance} \n transactionLimit => ${transactionLimit} \n history => ${historyLogs}`
        },
        putCredits: function (money) {
            historyLogs.push(`put ${money} credits`)
            balance += money
            return `new balance$ => ${balance}`
        },
        takeCredits: function (moneyOut) {
            if (transactionLimit >= moneyOut && balance >= moneyOut) {
                historyLogs.push(`take ${moneyOut} credits`)
                balance -= moneyOut
                transactionLimit -= moneyOut
                return `new balance$ => ${balance} \n new transaction limit ${transactionLimit}`
            } else if (transactionLimit < moneyOut)
                return `Your transaction limit is lower than should be ${transactionLimit} `
            else return `You dont have enought money your balance => ${balance}`
        },
        setTransactionLimit: function (limnitTransaction) {
            historyLogs.push(`set transaction limit ${limnitTransaction}`)
            transactionLimit = limnitTransaction
            return `Your new transactionlimit ${transactionLimit}`
        },
        transferCredits: function (money, newCard) {
            if (balance >= money && transactionLimit >= money) {
                historyLogs.push(`transfer ${money} credits to ${newCard}`)
                balance -= money
                newCard.putCredits(money - money * 0.05)
                return `you transfer for ${newCard} this ${money} amount`
            } else if (balance < money) {
                return `dont enough money your balance => ${balance}`
            } else {
                return `your transaction  limit ${traчnsactionLimit}`
            }
        },
    }
    return card
}

const card3 = userCard(3)
const card1 = userCard(8)
console.log(card3.getCardOptions())
console.log(card3.putCredits(150))
console.log(card3.getCardOptions())
console.log(card3.takeCredits(100))
console.log(card3.getCardOptions())
console.log(card1.getCardOptions())
console.log(card1.transferCredits(50, card3))
console.log(card3.getCardOptions())
console.log(card1.getCardOptions())
