const Character = require("./Character.js");

module.exports = class Warrior extends Character{
    constructor(name,life,attack,defense,shield){
        super(name,life,attack,defense)
        this.position =  'atacando'
        this.shield = shield
    }

    atacar(enemy){
        if (this.position === 'atacando'){
            
            // super.attack(enemy)  
            enemy.life -= this.attack - enemy.defense
            console.log('vc está atacando')        
        } else{
            console.log('vc não pode atacar')
        }
    }

    switchPosition(){
        if (this.position === 'atacando'){
            this.position = 'defendendo'
            this.defense = this.defense + this.shield
        } else {
            this.position = 'atacando'
            this.defense -= this.shield
        }
    }

}