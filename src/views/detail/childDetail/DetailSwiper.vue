<template>
    <Swiper class="dswiper">
      <swiper-item v-for="item in topImages" :key="item">
        <img :src="item" alt="">
      </swiper-item>
    </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    props:{
      topImages:{
        type:Array,
        default() {
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
.dswiper {
  height: 300px;
  overflow: hidden;
}
</style>