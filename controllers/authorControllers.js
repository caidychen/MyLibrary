const authors = require('../models/author')

const getAllAuthors = (req, res) => {
    res.send(authors)
}

const getAuthorById = (req, res) => {
    const author = authors.find(author => author.id === req.params.id)
    if (author) {
        res.send(author)
    } else {
        res.send([])
    }
}

const addAuthor = (req, res) => {
    // assemble a new author
    newAuthor = req.body
    // add to database
    authors.push(newAuthor)
    // return entire authors list to browser as a check that it worked
    res.send(authors)
}


module.exports = {
    getAllAuthors,
    getAuthorById
}