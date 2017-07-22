<template>
  <div id="app">
    <v-header></v-header>
    <div class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/Public">发布</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Article">文章</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Picture">图片</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Shipin">视频</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Music">音频</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="content-wrapper">
        <img src="./../src/assets/3.jpg">
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  //import navigation from './components/navigation/navigation.vue'
  export default {
    name: 'app',
    components: {
        'v-header': header,
        //'v-navigation': navigation
    }
  }
</script>

<style scoped>
  .nav {
    position: relative;
  }
  .nav .nav-list {
    position: absolute;
    left: 90px;
    /*background: #D2E8E5;*/
  }
  .nav .nav-item a {
    display: block;
    width: 90px;
    height: 50px;
    margin-top: 30px;
    color: #bababa;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    border: 2px solid #DEF0E8;
    border-radius: 10px;
  }
  .nav .nav-item a:hover {
    color: #D2E8E5;
  }
  .content {
    width: 73%;
    float: right;
    margin-right: 100px;
  }
  .content-wrapper {
    width: 300px;
    height: 300px;
    border-radius: 150px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 50px;

  }
  .content-wrapper img {
  }
  .content .text {
    text-align: center;
    padding-top: 15px;
  }
</style>




























