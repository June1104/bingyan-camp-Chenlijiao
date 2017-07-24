<template>
  <div class="content-wrapper">
    <div class="content-publish">
      <input v-model="content" type="text" class="content-input" placeholder="说点什么吧…">
      <a class="publish" v-on:click="publishArticle">发表</a>
      <div class="icon">
        <a href="#">
          <img src="./a.png">
        </a>
        <a href="#">
          <img src="./b.png">
        </a>
        <a href="#">
          <img src="./d.png">
        </a>
      </div>
    </div>
    <p class="article-content" v-for="article in articles">{{ article.content }}</p>
  </div>
</template>

<script>
  export default {
    created() {
      this.getArticles()
      document.title = this.$route.name
    },
    data() {
      return{
        content: '',
        article: {
            content: ''
        },
        articles: []
      }
    },
    methods: {
        getArticles(){
            this.$http.get('/api/publishArticle')
              .then(function (res) {
                console.dir(res.data)
                this.movies = res.data
              })
              .catch(function (err) {
                console.log(err)
              })
        },
        publishArticle() {
            this.$http.post('/api/publishArticle',{
                content: this.content
            })
              .then( (res) => {
                //this.toastr.success('发布成功')
                console.log(res.data)
                this.getArticles()
                this.articles.push({content: this.content})
                this.content = ''
              })
              .catch(function (err) {
                //this.toastr.warn('保存失败！')
                console.log(err)
              })
        },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-wrapper {
    width: 73%;
    height: 500px;
    float: right;
    margin-right: 100px;
  }
  .content-publish {
    position: relative;
    width: 500px;
    height: 100px;
    margin: 0 auto;
    margin-top: 50px;
  }
  .content-input {
    width: 500px;
    height: 50px;
    border: 1px solid #FEE0DC;
    border-radius: 5px;
    padding-left: 5px;
  }
  .content-publish .publish {
    display: block;
    position: absolute;
    top: 19px;
    right: 10px;
    font-size: 13px;
    color: #A387B7;
  }
  .content-publish .publish:hover {
    cursor: pointer;
  }
  .content-publish .icon {
    padding-top: 15px;
    float: right;
  }
  .content-publish .icon a {
    margin-left: 30px;
  }
  .article-content {
    width: 510px;
    margin-left: 210px;
    margin-top: 10px;
    color: #555;
    font-size: 13px;
    letter-spacing: 2px;
    text-indent: 30px;
    line-height: 1.5;
    border-bottom: 1px solid #D2E8E5;
  }
</style>
