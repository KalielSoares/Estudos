const Installment = require("./Installment")

module.exports = class loan{
    static #fee = 1.05

    constructor(value,installments){
        this.value = value,
        this.installments = []
        for (let i = 1; i <= installments; i++) {
           this.installments.push(new Installment((value * loan.#fee) / installments, i))       
        }
        this.createAt = new Date()
    }

    static get fee(){
        return loan.#fee
    }

    static set fee(newFeePercentage){
        loan.#fee = 1 + (newFeePercentage / 100)
    }
}