<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot=center class="title">
        <div v-for="(item,index) in title" :key="index" class="title-nav" 
        :class="{active:currentIndex===index}"
        @click="titleClick(index)">
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    components:{
      NavBar
    },
    data() {
      return {
        title:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick',index)
      },
      backClick() {
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
.title {
  display: flex;
  font-size: 15px;
}
.title-nav {
  flex:1;
}
.back {
  margin-top:7px;
}
.active {
  color:red;
}
</style>