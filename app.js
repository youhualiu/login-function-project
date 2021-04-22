//require necessary package
const express = require('express')
const app = express()
const port = 3000

// route setting
app.get('/', (res, req) => {
  res.send('Hello World')
})


// listening on the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})