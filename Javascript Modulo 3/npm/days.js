const dayjs = require("dayjs")

function birth(date){
    birthday = dayjs(date)
    today = dayjs()
    yourAge = today.diff(birthday, "year")
    nextBirthday = birthday.add(yourAge + 1, "year")
    daysLeft = nextBirthday.diff(today, "day") + 1
    

    console.log(`Sua idade é de ${yourAge} anos`)
    console.log(`Seu proximo aniversario é em ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`faltam ${daysLeft} dias pro seu aniversario`)

}

birth("12-20-2001")
