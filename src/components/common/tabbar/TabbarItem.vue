<template>
  <div class="tabbar-item" @click="btnClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="textStyle"><slot name="item-text"></slot></div>
    
  </div>
</template>

<script>
  export default {
    props:{
      path:String,
      textcolorset:{
        type:String,
        default:'red'
      }
    },
    methods: {
      btnClick() {
        this.$router.push(this.path)
      }
    },
    computed: {
      isActive() {
        return this.$route.path === this.path
      },
      textStyle() {
        return this.isActive ? {color:this.textcolorset} : null
      }
    },
  }
</script>

<style scoped>
  .tabbar-item {
    flex:1;
    text-align: center;
    font-size: 14px;
  }
  .tabbar-item img {
    width: 24px;
    vertical-align: middle;
    margin:3px 0 2px 0;
  }
</style>