<template>
  <div class="cart">
    <!-- 1、导航 -->
    <nav-bar class="navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 2、商品的列表 -->
    <cart-list></cart-list>
    <!-- 3、底部汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
import {mapGetters} from 'vuex'
  export default {
    name:'cart',
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color:#fff;
}

</style>