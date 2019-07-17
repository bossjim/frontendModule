import Vue from 'vue'
import DEER from './DEER'
import router from './router'
import Antd from 'ant-design-vue'
import VueApexCharts from 'vue-apexcharts'

import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(DEER)
}).$mount('#deer')
