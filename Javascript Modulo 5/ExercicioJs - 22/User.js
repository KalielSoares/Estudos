const Account = require("./Account")

module.exports = class User{
    constructor(fullName,email,account){
        this.fullName = fullName,
        this.email = email,
        this.account = new Account(this)
    }
}