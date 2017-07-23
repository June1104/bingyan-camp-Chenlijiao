/**
 * Created by June on 2017/7/23.
 */

const Article = require ('../models/article')

module.exports = function(req, res) {
  console.log(req.body)
  Article.create(req.body, function (err, article) {
    if (err) {
      res.json(err)
    } else {
      res.json(article)
    }
  })
}
