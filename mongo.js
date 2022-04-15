const args = process.argv.slice(2)

if ((args.length === 1) || (args.length > 2)) {
    console.log("Invalid arguments!")
    process.exit()
}
const mongoose = require('mongoose')



const url = 'mongodb+srv://laurimaila:xxxxx@cluster.ri9ce.mongodb.net/fullstack-persons'

mongoose.connect(url)

const Person = mongoose.model('Person', {
    name: String,
    number: String
})


if (args.length === 0) {
    console.log("puhelinluettelo:")
    Person
        .find({})
        .then(result => {
            result.forEach(person => {
                console.log(person.name + " " + person.number)
            })
            mongoose.connection.close()
        })
}

if (args.length === 2) {
    const person = new Person({
        name: args[0],
        number: args[1]
    })
    person
        .save()
        .then(response => {
            console.log('person saved!')
            mongoose.connection.close()
        })
}