const mongoose = require('mongoose')
const User = require('../user')
mongoose.connect('mongodb://localhost/login-user', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb failed to connect')
})
db.once('open', () => {
  console.log('mongodb connected')
  User.create({
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    })
})