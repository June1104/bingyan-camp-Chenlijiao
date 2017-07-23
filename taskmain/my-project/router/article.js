/**
 * Created by June on 2017/7/23.
 */
const Article = require ('../models/article')
module.exports = function(req, res){
  Article.findOne({ _id: req.params.id },function (err,docs) {
    if (err) {
      console.error(err)
      return
    }
    res.send(docs)
  })
}

// const express = require ('express')
// const router =express.Router()
// const Article = require('../models/article')
//
// //获取所有文章
// router.get('/api/articleList',)
// //文章保存
// router.post('/api/admin/saveArticle',function (req, res) {
//   new db.Article(req.body.articleInformation).save(function (err) {
//     if(err) {
//       res.status(500).
//     }
//   })
// })
