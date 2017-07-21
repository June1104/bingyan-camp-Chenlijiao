<template>
  <div class="picture-wrapper">
    <div class="pic-item1">
      <img src="./a.jpg">
      <p></p>
    </div>
    <div class="pic-item2">
      <img src="./b.jpg">
      <p></p>
    </div>
    <div class="pic-item3">
      <img src="./c.jpg">
      <p></p>
    </div>
    <div class="pic-item4">
      <img src="./d.jpg">
      <p></p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .picture-wrapper {
    position: relative;
    width: 73%;
    height: 800px;
    float: right;
    margin-right: 100px;
    /*background: #d3d2e8;*/
    padding: 20px 0px 0 15px;
  }
  .pic-item1 {
    position:absolute;
    padding-bottom: 20px;
    background: white;
  }
  .pic-item2 {
    position:absolute;
    left: 250px;
    padding-bottom: 20px;
    background: white;
  }
  .pic-item3 {
    position:absolute;
    left: 500px;
    padding-bottom: 20px;
    background: white;
  }
  .pic-item4 {
    position:absolute;
    left: 750px;
    padding-bottom: 20px;
    background: white;
  }
  .picture-wrapper img {
    width: 200px;
    height: 300px;
  }
</style>
