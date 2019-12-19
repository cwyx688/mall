<template>
  <div id="recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      recommends:{
        type:Array,
        default() {
          []
        }
      }
    }
  }
</script>

<style scoped>
  #recommends {
    display:flex;
    border-bottom:8px solid #eee;
    text-align: center;
  }
  .recommends-item {
    flex:1; 
    margin:10px 0 20px;
    font-size: 14px;
  }
  .recommends-item img {
    width: 80px;
    margin-bottom:5px;
  }
</style>