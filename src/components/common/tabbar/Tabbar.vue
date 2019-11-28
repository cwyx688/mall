<template>
  <div id="tabbar">
    <!-- <div class="tabbar-item">首页</div>
    <div class="tabbar-item">分类</div>
    <div class="tabbar-item">购物车</div>
    <div class="tabbar-item">我的</div> -->
    <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  #tabbar {
    display:flex;
    background-color: #eee;
    height:49px;

    position: fixed;
    bottom:0;
    left:0;
    right:0;
  }

</style>