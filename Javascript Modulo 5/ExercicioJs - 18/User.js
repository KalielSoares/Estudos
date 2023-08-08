class User{
    constructor(fullName,email,password){
        this.fullName = fullName,
        this.email = email,
        this.password = password

    }

    login(email,password){
        if (this.email === email && this.password === password) {
            console.log(`Login bem sucedido ${this.fullName}`)
        } else
        console.log('Falha ao tentar logar neste email')
    }
}

const Kaliel = new User('Kaliel Soares', 'Kalielsoares6@gmail.com', '1234')

Kaliel.login('Kalielsoares6@gmail.com', '1234')
console.log(Kaliel)