const Article = require ('../models/article')

module.exports = function(req, res) {
  Article.find({})
    .sort({ update_at : -1})
    .then(function(articles){
      res.json(articles)
    })
    .catch(function(err){
      res.json(err)
    })
}
