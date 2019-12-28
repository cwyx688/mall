<template>
  <div class="bottom">
   <div class="button"><check-Button class="check-button" :is-checked="isSelectAll" @click.native="checkClick"/>
    </div><span>全选</span>
  


     <div class="totalPrice">
    合计：{{totalPrice}}
  </div>

  <div class="calculate" @click="caculateClick">
    去计算:({{checkLength}})
  </div>

  </div>
  
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
import {mapGetters} from 'vuex'
  export default {
    name:'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      
      totalPrice() {
/* 
        return '￥' + this.$store.state.cartList.filter(item=>{
          return item.checked
        }).reduce((preValue,item)=>{
          return  preValue + item.realPrice*item.count
        },0).toFixed(2)
         */
        return '￥'+this.cartList.filter(item=>{
          return item.checked
        }).reduce((preValue,item)=>{
          return preValue + item.realPrice*item.count
        },0).toFixed(2)
      },

      checkLength() {
/* 
        return this.$store.state.cartList.filter(item=>{
          return item.checked
        }).length
         */
        return this.cartList.filter(item=>item.checked).length
      },
      isSelectAll() {
        if (this.cartList.length === 0) {
          return false
        } else {
          return this.cartList.every(item=>{
          return item.checked
        })
        }
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          this.cartList.forEach(item=>item.checked = false)
        } else {
          this.cartList.forEach(item=>item.checked = true)
        }

        
      },
      caculateClick() {
        if(this.cartList.every(item=>item.checked===false)) {
          this.$toast.show('请选择商品', 2000)
        }
      }
    },
  }
</script>

<style scoped>
.bottom {
  height:40px;
  line-height: 40px;
  font-size: 14px;
  background-color: #f6f6f6;
  position: fixed;
  bottom:49px;
  left:0;
  right:0;
  display: flex;
  align-items: center;
}
.button {
  margin-left:10px;
  margin-right:5px;
}

.check-button {
 width: 20px;
 height: 20px;
 line-height: 20px;
 
}
.tc {
  display: flex;
  justify-content:space-around;

}
.totalPrice {
  margin-left: 20px;
}
.calculate {
  margin-left:20px;
  background-color:pink;
  color:#fff;
  width: 100px;
  text-align: center;
  position:absolute;
  right:0;
}
</style>