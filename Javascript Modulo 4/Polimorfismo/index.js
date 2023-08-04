class Vehicle{
    move(){
        console.log("O veiculo está se movendo.")
    }
}

class Car extends Vehicle{
    move(){
        console.log("O carro está se movendo.")
    }
}

class Ship extends Vehicle{
    move(){
        console.log("O navio está navegando.")
    }
}

class Aircraft extends Vehicle{
    move(speed){
        console.log(`A aeronvae está voado a ${speed} km/h`)
    }
}

const monza = new Car();
const titanic = new Ship();
const Drumond = new Aircraft();

monza.move()
titanic.move()
Drumond.move(20)