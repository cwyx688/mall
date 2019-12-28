import Toast from './Toast'

const obj = {}

obj.install = function(Vue) {
  
  
  // 1、创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 2、用new的方式，根据组件构造器创建一个组件对象
  const toast = new toastConstructor()
  // 3、将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  // 4、toast.$el对应的就是div
  document.body.appendChild(toast.$el)

// console.log(toast);
// console.log(Toast);


  Vue.prototype.$toast = toast; //注意这里，是小写的toast，为什么？因为她是Vue组件，而Toast只是一个对象，是Vue组件就可以按Vue的使用方法找到其内部的属性和方法，
}



export default obj