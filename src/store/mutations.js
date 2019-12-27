export default {
  /*addCart(state,payload) {
     由于这里干了两件事，一数量加1，二将商品添加到数组，在mutations中不推荐这么做，建议使用actions

    // 1、查找之前数组中是否有该商品
    let oldProduct = state.cartList.find(item=>item.iid===payload.iid)
    
    if (oldProduct) {
      oldProduct.count += 1
    } else {
      payload.count = 1
      state.cartList.push(payload)
    } 
   }*/

  // 以下是新的分开处理两件事的做法
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
}