import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import TopHeader from './TopHeader'
import About from './About'

Vue.component('app-header', Header);
Vue.component('app-top-header', TopHeader);
Vue.component('app-about', About);

Vue.directive('on-scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
