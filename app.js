// setting
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const User = require("./models/user")

// views engine setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

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

app.post('/login', (req, res) => {
  const inputEmail = req.body.email
  const inputPassword = req.body.password
  if (!inputEmail || !inputPassword) {
    let incompletedWarning = 'The form is not completed'
    console.log(inputEmail)
    res.render('index', { incompletedWarning })
    return
  }
  return User.findOne({ email: inputEmail })
    .lean()
    .then(user => {
      if (user === null) {
        let mistakeWarning = "User account doesn't exist"
        res.render('index', { mistakeWarning })
        return
      } else if (user.password !== inputPassword) {
        let mistakeWarning = "Password is wrong"
        res.render('index', { mistakeWarning })
        return
      }
      let name = user.firstName || null
      res.render('welcome', { name })
    })
    .catch(error => console.log(error))
})


// listening on the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})