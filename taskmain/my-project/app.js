/**
 * Created by June on 2017/7/22.
 */
const express = require('express')
const app = express()
const article = require('./router/article')
const publish = require('./router/publish')
const fetch = require('./router/fetch')

var bodyParser = require('body-parser');
app.use(bodyParser.json());

console.log(article)

app.get('/api/articleDetail/:id', require('./router/article'))
app.post('/api/publishArticle',require('./router/publish'))
app.get('/api/publishArticle',require('./router/fetch'))
// app.use('/api',article)
// app.use('/',(req,res) => {
//   res.send('Yo!')
// })
app.listen(3000,() => {
  console.log('app listening on port 3000.')
})
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blog')
