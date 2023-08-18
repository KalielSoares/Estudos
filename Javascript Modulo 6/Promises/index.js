// const p = new Promise((resolve,reject) => {
    
//     }), 1000 * 2
// })

// console.log(p)

// setTimeout(() => {
//     console.log(p)
// })

function execute() {
    return new Promise((resolve,reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve(42)
        }, 1000 * 2)
    })
}

const p = execute()

p.then((result) => {
    console.log(`A promise foi resolvida.O Resultado foi: ${result}`)
})