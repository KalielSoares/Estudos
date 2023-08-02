function cadastroRecrutas(name,lastName,estude,yearBirthday) {
    const idade =  2023 - yearBirthday
    
    console.log('O nome completo do recruta é: ' + name + ' '+ lastName);
    console.log('O recruta estuda: ' + estude)
    console.log('E você tem: ' + idade + ' anos')

    
}

cadastroRecrutas('Kaliel', 'Soares', 'Programação', 2001)