const mongoose = require('mongoose')

const url = 'mongodb+srv://laurimaila:polynomi@cluster.ri9ce.mongodb.net/fullstack-persons'

mongoose.connect(url)

const Person = mongoose.model('Person', {
    name: String,
    number: String
})

module.exports = Person