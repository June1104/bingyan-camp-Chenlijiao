<template>
  <div class="content-wrapper">
    <div class="content-public">
      <input type="text" class="content-input" placeholder="说点什么吧…">
      <a class="public" href="#">发表</a>
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
  </div>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-wrapper {
    width: 73%;
    height: 500px;
    float: right;
    margin-right: 100px;
  }
  .content-public {
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
  .content-public .public {
    display: block;
    position: absolute;
    top: 19px;
    right: 10px;
    font-size: 13px;
    color: #A387B7;
  }
  .content-public .icon {
    padding-top: 15px;
    float: right;
  }
  .content-public .icon a {
    margin-left: 30px;
  }
</style>
