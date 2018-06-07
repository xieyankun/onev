import Loading from './Loading'

export default {
  install (Vue, defaultOptions = {}) {
    const LoadingComponent = Vue.extend(Loading)
    const LoadingCom = new LoadingComponent()

    const loading = {}

    loading.show = (options) => {
      if (!LoadingCom.$el) {
        const vm = LoadingCom.$mount()
        document.querySelector('body').appendChild(vm.$el)
      }

      LoadingCom.show(options)
    }
    loading.hide = () => {
      LoadingCom.hide()
    }

    Vue.prototype.$loading = loading
  }
}
