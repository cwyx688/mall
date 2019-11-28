<template>
  <div>
    <Tabbar>
      <tabbar-item path="/home" textcolorset="skyblue">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category" textcolorset="skyblue">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart" textcolorset="skyblue">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile" textcolorset="skyblue">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar.vue";
import TabbarItem from 'components/common/tabbar/TabbarItem.vue'
  export default {
    components: {
    Tabbar,
    TabbarItem
  }
  }
</script>

<style scoped>

</style>