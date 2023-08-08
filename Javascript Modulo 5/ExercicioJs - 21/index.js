const Character = require("./Character");
const Thief = require("./Thief.js");
const Warrior = require("./Warrior");
const Mage = require("./mage.js");


const arthur = new Mage(14,'Arthur', 90, 4, 2, )
const beatrice = new Thief('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({ arthur, beatrice, cain })

cain.switchPosition()
arthur.atacar(cain)
beatrice.atacar(arthur)

console.table({ arthur, beatrice, cain })

cain.atacar(arthur)
arthur.curar(arthur)
beatrice.atacar(cain)

console.table({ arthur, beatrice, cain })