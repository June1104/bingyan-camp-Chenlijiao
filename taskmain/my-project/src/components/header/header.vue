<template xmlns="http://www.w3.org/1999/html">
  <div class="header">
    <div class="self-introduction">
      <div class="avatar">
        <img src="./a.jpg">
      </div>
      <div class="name">June</div>
      <div class="information">
        <p class="details">19岁</p>
        <p class="details">天蝎座</p>
        <p class="details">综艺爱好者</p>
      </div>
    </div>
    <div class="search-box">
      <form>
        <input type="text" placeholder="搜你喜欢的" class="search">
        <a href="#" target="_blank" class="pic"></a>
      </form>
    </div>
    <div class="nav">
      <a class="nav-item" v-on:click="showDetail">登录</a>
      <a class="nav-item" v-on:click="showDetail">注册</a>
    </div>
    <div v-show="detailShow" class="sign-in"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
      data(){
          return{
              detailShow:false
          }
      },
    methods:{
          showDetail(){
              this.detailShow = true
          }
    }
  }
</script>

<style scoped>
  .header {
    position: relative;
    width: 100%;
    height: 200px;
    background: #D2E8E5;
  }
  .self-introduction .avatar {
    position: absolute;
    width: 100px;
    border: 3px solid #dedede;
    border-radius:100px;
    overflow: hidden;
    top:20px;
    left:80px;
  }
  .self-introduction img {
    width: 100px;
    height: auto;
  }
  .self-introduction .name {
    position: absolute;
    bottom: 42px;
    left: 107px;
    font-size: 20px;
    font-weight: 800;
    font-family: 'Open Sans', sans-serif;
    color: #4f4f4f;
  }
  .self-introduction .information {
    position: absolute;
    bottom: 42px;
    left:235px;
  }
  .self-introduction .information .details {
    margin-right: 20px;
    float: left;
    color: #838080;
    font-size: 15px;
  }
  .header .search-box {
    position: absolute;
    top: 30px;
    right: 80px;
  }
  .search-box .search {
    position: relative;
    width: 250px;
    height: 30px;
    border: 1px solid rgba(255,255,255,.8);
    border-radius: 3px;
    color: #fff;
    background: rgba(0,0,0,.08);
    padding: 0 7px;
  }
  .search-box .search:hover {
    background: rgba(0,0,0,.2);
  }
  .search-box .pic {
    position: absolute;
    display: block;
    height: 30px;
    width: 35px;
    top: 6px;
    right: 0;
    background: url("./search1.png") no-repeat;
  }
  .header .nav {
    position: absolute;
    right: 80px;
    bottom: 42px;
  }
  .header .nav .nav-item {
    color: #c3c2c2;
    margin-left: 20px;
  }
  .header .nav .nav-item:hover {
    color: white;
    cursor: pointer;
  }
  .header .sign-in {
    position: fixed;
    top: 150px;
    left: 400px;
    z-index: 100;
    width: 500px;
    height: 300px;
    background: greenyellow;
  }
</style>



























