<template>
    <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </SwiperItem>
    </Swiper>

</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    data() {
      return {
        isImgLoad:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgLoad() {
        if(!this.isImgLoad) {
          this.$emit('ItemImgLoad')
          this.isImgLoad = true
        }
      }
    },
  }
</script>

<style scoped>

</style>