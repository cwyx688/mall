<template>
  <div class="detail">
    <detail-nav class="detail-nav"/>
    <scroll class="content"  ref="scroll">
      <detail-swiper :top-images="topImages"/>
    <detail-base-info  :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
    <detail-params-info  :param-info="paramInfo"/>
    </scroll>
  </div>
</template>

<script>
import DetailNav from './childDetail/DetailNav.vue'
import DetailSwiper from './childDetail/DetailSwiper.vue'
import DetailBaseInfo from './childDetail/DetailBaseInfo.vue'
import DetailShopInfo from './childDetail/DetailShopInfo.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childDetail/DetailGoodsInfo.vue'
import DetailParamsInfo from './childDetail/DetailParamInfo.vue'
import {getDetail,Goods,Shop,GoodsParam} from 'network/detail.js'
  export default {
    name:"Detail",
    components:{
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamsInfo
    },
    data() {
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{}
      }
    },
    created() {
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res=>{
        console.log(res);
        let data = res.result
        this.topImages = data.itemInfo.topImages

        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      })
      
      
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    },


  }
</script>

<style scoped>
.detail {
  position:relative;
  z-index: 10;
  background-color: #fff;
  height:100vh
}
.content {
  height:calc(100% - 44px)
}
.detail-nav {
  position:relative;
  z-index: 10;
  background-color: #fff;
}
</style>