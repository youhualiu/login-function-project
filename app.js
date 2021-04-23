// setting
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

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
app.get('/', (res, req) => {
  res.send('Hello World')
})


// listening on the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})