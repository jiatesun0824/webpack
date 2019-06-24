import Vue from 'vue';
import '@/css/base.scss'
import '@/css/case.scss'
import App from './App.vue'
import router from '@/router'
console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
Vue.component('my-component', {
  template: '<img :src="url" />',
  data() {
    return {
      url: require('image/1212.png')
    }
  }
})
new Vue({
  el: '#app',
  template:'<App/>',
  created() {
    this.test()
  },
  methods: {
    test() {
      alert(1)
    }
  },
  components: { App },
  router
})