<template>
  <div >
    <img src="~assets/img/cart/tick.svg" alt="" class="check-button" :class="{check:isChecked}">
  </div>
</template>

<script>
  export default {
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
.check-button {
  border:1px solid #999;
  border-radius: 50%;
}
.check {
  background-color: red;
  border-color:red;
}
</style>