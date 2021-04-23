const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  firstName, email, password: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('User', userSchema)