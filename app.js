// setting
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// views engine setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// connecting to db
mongoose.connect('mongodb://localhost/login-user', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb failed to be connected')
})

db.once('open', () => {
  console.log('moongodb connected')
})

// route setting
app.get('/', (req, res) => {
  res.render('index')
})


// listening on the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})