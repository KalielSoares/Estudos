const Character = require("./Character");

module.exports = class Thief extends Character{
    constructor(name,life,attack,defense){
        super(name,life,attack,defense)
    }
        
    atacar(enemy){
        enemy.life -= (this.attack - enemy.defense) * 2
    }
}