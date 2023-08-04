const Character = require("./Character.js");

module.exports = class Warrior extends Character{
    constructor(name,life,attack,defense,position,shield){
        super(name,life,attack,defense)
        this.position =  'atacando'
        this.shield = shield
    }

    

}