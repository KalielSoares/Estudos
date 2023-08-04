const Character = require("./Character");
const Thief = require("./Thief.js");
const Mage = require("./mage.js");



const Mago = new Mage(2,'kaliel',12,2,2)
const ladino = new Thief('pedroca',5,2,0)


Mago.curar(ladino)

console.log(ladino.life)

