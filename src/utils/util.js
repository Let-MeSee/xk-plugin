// todo 工具类方法

// ? 测试
export default {
  install(Vue, options) {
    console.log('install')
    console.log(arguments) 
    Vue.sayHello = function () {
      console.log('hello world!')
    }
    Vue.prototype.sayHi = function () {
      console.log('Hi')
    }
    Vue.directive('throttle', function (el, binding) {
      let timer = null
      el.addEventListener(binding.value.type, function () {
        if (timer) return
        binding.value.cb()
        timer = setTimeout(() => {
          timer = null
        }, binding.value.wait)
      })
    })
  }
}
