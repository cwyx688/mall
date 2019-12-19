<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature></feature>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
    ></tab-control>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import Feature from "./childComps/FeatureView.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(res);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
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
  padding-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
