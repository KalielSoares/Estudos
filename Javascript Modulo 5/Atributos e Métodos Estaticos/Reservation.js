class Reservation{
    constructor(guests,room,days){
        this.guests = guests,
        this.room = room,
        this.days = days,
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150

    static showBaseFree(){
        console.log(`Base fee is ${Reservation.baseFee}`)
    }

    static get premiumFree(){
        return Reservation.baseFee * 1.5
    }
}

Reservation.showBaseFree()

const r1 = new Reservation(3,"201",5)
console.log(r1)

const r2 = new Reservation(2,"104",2)
console.log(r2)