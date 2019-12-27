import {debounce} from './utils.js';
import BackTop from "components/content/backtop/BackTop.vue";

export const itemImgListenerMixin = {
  data() {
    return {  
      itemImgLoad:null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgLoad = ()=>{
        refresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgLoad)
    console.log('hahaha');
    
  }
  
  
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components:{
    BackTop
  },
  methods: {
    backClick() {
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
}