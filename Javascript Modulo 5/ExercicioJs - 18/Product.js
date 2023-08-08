class product{
    constructor(name,description,price){
        this.name = name,
        this.description = description,
        this.price = price,
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity
    }

    calculateDiscount(discount){
        return this.price * ((100 - discount)/ 100)
    }
}

const Book = new product('Eragon','Livro de fantasia',50)
const discountBook = Book.calculateDiscount(10)
const mel = new product('Mel','Livro de gays',50)

Book.addToStock(50)
console.log(Book, discountBook)
console.log(mel)
