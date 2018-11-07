import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import TopHeader from './TopHeader'
import About from './About'
import AboutProfile from './AboutProfile'
import Works from './Works'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'

Vue.component('app-header', Header);
Vue.component('app-top-header', TopHeader);
Vue.component('app-about', About);
Vue.component('app-about-profile', AboutProfile);
Vue.component('app-works', Works);
Vue.component('app-work', Work);
Vue.component('app-contact', Contact);
Vue.component('app-footer', Footer);

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
