const Character = require("./Character");

module.exports = class Mage extends Character{
    constructor(mana,name,life,attack,defense){
        super(name,life,attack,defense)
        this.mana = mana
    }

    atacar(enemy){
        enemy.life -= ((this.attack + this.mana) - enemy.defense)
    }

    curar(ally){
        ally.life += this.mana * 2
    }
}

