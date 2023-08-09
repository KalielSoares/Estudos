const Database = require("./Database");
const Author = require("./entities/Author");
const Book = require("./entities/Book");
const Order = require("./entities/Order");
const Poster = require("./entities/Poster");
const User = require("./entities/user");

module.exports = class App {
    static #database = new Database();


    createUser(name,password,email){
        const user = new User(name,email,password)
        App.#database.saveUser(user)
    }

    getUsers(){
        return App.#database.find('users')
        
    }

    createAuthor(name,nationality,bio){
        const author = new Author(name,nationality,bio)
        App.#database.saveAuthor(author)
    }

    getAuthors(){
        return App.#database.find('authors')
    }

    createBook(title,synopsis,genre,pages,author,description,inStock){
        const book = new Book(title,synopsis,genre,pages,author,description,inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName,quantity){
        App.#database.addBooksToStock(bookName,quantity)
    }

    getBooks() {
        return App.#database.find('books')
    }
    
    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
      }
    
      addPoster(postername, quantity) {
        App.#database.addPostersToStock(postername, quantity)
      }
    
      getPosters() {
        return App.#database.find('posters')
      }

    createOrder(items,user){
        const order = new Order(items,user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({product,quantity}) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock(product.name,quantity)
            } else if (product instanceof Poster){
                App.#database.removeBooksFromStock(product.name, quantity)
            }
        });

        
    }

    showDatabase() {
        App.#database.showStorage()
      }
}