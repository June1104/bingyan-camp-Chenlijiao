<template>
  <div id="app">
    <v-header></v-header>
    <div class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/Article">Article</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Picture">Picture</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Shipin">Shipin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Music">Music</router-link>
        </li>
      </ul>
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
    left: 80px;
    /*background: #D2E8E5;*/
  }
  .nav .nav-item a {
    display: block;
    width: 150px;
    height: 85px;
    color: #bababa;
    line-height: 100px;
    font-size: 16px;
  }
  .nav .nav-item a:hover {
    color: #D2E8E5;
  }
</style>




























