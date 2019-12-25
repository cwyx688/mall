import {debounce} from './utils.js';

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