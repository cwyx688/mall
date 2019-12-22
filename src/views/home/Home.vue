<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

  <Scroll class="content" ref="scroll" :probe-type="3" @scroll="showControl" :pull-up-load="true" @pullingUp="moreLoad">
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature></feature>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @itemClick="tabClick"
    ></tab-control>
    <goods-list :goodsList="showGoodsList"></goods-list>
  </Scroll>

  <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import Feature from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue';

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop:false
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 网络请求方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(res);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
      
    },
    // 事件方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      this.$refs.scroll.scrollTo(0,0)
    },
    showControl(position) {
      this.isShowBackTop = -position.y > 1000
    },
    moreLoad() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    }
  },
  computed: {
      showGoodsList() {
        return this.goods[this.currentType].list
      }
    },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 6;
}
.content {
  position:absolute;
  top:44px;
  bottom:49px;
  left:0;
  right:0;
  overflow: hidden;
}
/* .content {
  height:calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
