<template>
  <div class="detail">
    <detail-nav class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" @scroll="contenScroll" :probe-type="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-params-info :param-info="paramInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods-list="recommends" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNav from "./childDetail/DetailNav.vue";
import DetailSwiper from "./childDetail/DetailSwiper.vue";
import DetailBaseInfo from "./childDetail/DetailBaseInfo.vue";
import DetailShopInfo from "./childDetail/DetailShopInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childDetail/DetailGoodsInfo.vue";
import DetailParamsInfo from "./childDetail/DetailParamInfo.vue";
import DetailCommentInfo from "./childDetail/DetailCommentInfo.vue";

import GoodsList from "components/content/goods/GoodsList.vue";

import DetailBottomBar from './childDetail/DetailBottomBar.vue'

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail.js";
import { debounce } from "common/utils.js";
import { itemImgListenerMixin,backTopMixin } from "common/mixin.js";
export default {
  name: "Detail",
  mixins: [itemImgListenerMixin,backTopMixin],
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex:0,
    };
  },
  created() {
    // 1.获取iid
    this.iid = this.$route.params.iid;
    // 2.请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      let data = res.result;
      this.topImages = data.itemInfo.topImages;

      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 3.请求推荐数据
    getRecommend().then(res => {
      console.log(res);

      this.recommends = res.data.list;
    });

    // 4、给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      console.log(this.themeTopYs);
    },100);
  },
  methods: {
    
    
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contenScroll(position) {
      // 1、获取y值
      const positionY = -position.y
      this.isShowBackTop = -position.y > 1000;  //backTop混入的配合代码
      // 2、positionY和主体中值进行对比
      // [0, 7938, 9120, 9452]
      // positionY 在 0 和 7938 之间，index=0
      // positionY 在 7938 和 9120 之间，index=1
      // positionY 在 9120 和 9452 之间，index=2
      // positionY 超过 9452 ，index=3
/* 
    // 方法一
      let length = this.themeTopYs.length;
      for(let i=0; i<length; i++) {
        if (this.currentIndex !== i && ((i<length-1 && positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1])||(i===length-1 && positionY>=this.themeTopYs[i]))) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
          
        }
      }
     */  
    // 方法二  给themeTopYs的末尾加一个js中最大值
      let length = this.themeTopYs.length;
      for(let i=0; i<length-1; i++) {
        if(this.currentIndex !== i && (positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    addToCart() {
      // 获取购物车需要展示的信息
      const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.realPrice = this.goods.realPrice
        product.iid = this.iid

      this.$store.dispatch('addCart', product)
    }
  },
  mounted() {},
  updated() {},

  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgLoad);
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 58px);
  overflow: hidden;
}
.detail-nav {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>
