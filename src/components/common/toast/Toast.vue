<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name:'Toast',
    data() {
      return {
        message:'',
        isShow:false
      }
    },
    methods: {
      show(message,duration) {
        this.message = message
        this.isShow = true
        setTimeout(()=>{
          this.isShow = false
        },duration)
      },
      
    },   
    
  }
</script>

<style scoped>
.toast {
  position:fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background: rgba(0,0,0,.6);
  color:#fff;
  padding: 4px 10px;
  border-radius: 7px;
  z-index: 999;
}
</style>