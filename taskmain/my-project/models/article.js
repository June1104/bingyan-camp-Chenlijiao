/**
 * Created by June on 2017/7/22.
 */
const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
  //title: { type: String,required: true },
  //author: { type: String,required: true },
  content: { type: String,required: true }

})
const Article = module.exports = mongoose.model('Articltie',articleSchema)
