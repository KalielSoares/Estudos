module.exports = class Transfer{
    constructor(userSend,userRecive,value){
        this.userSend = userSend,
        this.userRecive = userRecive,
        this.value = value,
        this.createAt = new Date ()
    }
}