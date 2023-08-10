function PhoneNumber(phoneNumberString) {
    const fixedString = phoneNumberString.replace(/[\sA-Za-z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
}

console.log(new PhoneNumber('+55 (22) 9 9914-0666'))
console.log(new PhoneNumber('+1 (73) 9 99as-0666asd'))

