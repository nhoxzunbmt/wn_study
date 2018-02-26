// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/font-awesome.css'
import './assets/css/easy-responsive-tabs.css'

// import './assets/js/jquery-2.1.4.min.js'
// import './assets/js/modernizr.custom.js'
// import './assets/js/minicart.min.js'
// import './assets/js/easy-responsive-tabs.js'
// import './assets/js/jquery.waypoints.min.js'
// import './assets/js/jquery.countup.js'
// import './assets/js/move-top.js'
// import './assets/js/jquery.easing.min.js'
// import './assets/js/bootstrap.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
