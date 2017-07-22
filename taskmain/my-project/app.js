/**
 * Created by June on 2017/7/22.
 */
const express = require('express')
const app = express()
app.use('/',(req,res) => {
  res.send('Yo!')
})
app.listen(3000,() => {
  console.log('app listening on port 3000.')
})
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blog')
