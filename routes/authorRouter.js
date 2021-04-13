const express = require('express')

const authorRouter = express.Router()

const authorController = require("../controllers/authorControllers.js")
const author = require('../models/author.js')

authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res))
authorRouter.get('/:id', (req, res) => authorController.getAuthorById(req, res))
authorRouter.post('/', authorController.addAuthor)
module.exports = authorRouter