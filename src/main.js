import Vue from 'vue'
import DEER from './DEER'
import store from './store'
import router from './router'
import db from 'utils/localstorage'
import Antd from 'ant-design-vue'
import VueApexCharts from 'vue-apexcharts'

import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(db)
Vue.use(VueApexCharts)

Vue.use({
  install (Vue) {
    Vue.prototype.$db = db
  }
})

Vue.component('apexchart', VueApexCharts)
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(DEER)
}).$mount('#deer')
