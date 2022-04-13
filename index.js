const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const generateId = () => {
  const maxId = notes.length > 0 ? notes.map(n => n.id).sort((a,b) => a - b).reverse()[0] : 1
  return maxId + 1
}
function getRandomInt() {
  return Math.floor(Math.random() * 20000);
}

app.post('/api/persons', (request, response) => {
  const body = request.body
  const huut = body.name

  if (body.name === undefined) {
    return response.status(400).json({error: 'Missing name'})
  }
  if (body.number === undefined) {
    return response.status(400).json({error: 'Missing number'})
  }
  if (numbers.some(i => i.name.includes(body.name))) {
    return response.status(400).json({error: 'Name must be unique'})
  }

  const number = {
    name: body.name,
    number: body.number,
    id: getRandomInt()
  }

  numbers = numbers.concat(number)
  console.log("Numero lisätty")

  response.json(number)
})

var numbers = [
    {
      name: "Arto Hellas",
      number: "040-123456",
      id: 1,
    },
    {
      name: "Martti Tienari",
      number: "040-123456",
      id: 2,
    },
    {
      name: "Arto Järvinen",
      number: "040-123456",
      id: 3,
    },
    {
      name: "Lea Kutvonen",
      number: "040-123456",
      id: 4,
    }
  ]

app.get('/', (req, res) => {
  res.send('<h1>Phonebook</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(numbers)
  console.log("Näytetään kaikki numerot")
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const number = numbers.find(number => number.id === id)
  
    if ( number ) {
      response.json(number)
      console.log("Näytetään yksi numero")
    } else {
      response.status(404).end()
      console.log("Numeroa ei löytynyt")
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    numbers = numbers.filter(number => number.id !== id)
    console.log("Numero poistettu")
  
    response.status(204).end()
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})