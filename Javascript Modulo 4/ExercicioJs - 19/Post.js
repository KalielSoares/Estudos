const Comment = require("./Comment")


class Post{
    constructor(text,body,author){
        this.text = text,
        this.body = body,
        this.author = author,
        this.comments = [],
        this.createAt = new Date()
    }

    addComment(username,content){
        this.comments.push(new Comment(username, content))
    }
}

module.exports = Post