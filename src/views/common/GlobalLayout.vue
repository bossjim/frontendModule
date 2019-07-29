<template>
  <a-layout>
    <drawer v-if="isMobile" :openDrawer="collapsed" @change="onDrawerChange">
      <sider-menu :theme="theme" :menuData="menuData" :collapsed="false" :collapsible="false" @menuSelect="onMenuSelect"/>
    </drawer>
    <sider-menu :theme="theme" v-else-if="layout === 'side'" :menuData="menuData" :collapsed="collapsed" :collapsible="true" />
  </a-layout>
</template>

<script>
import GlobalHeader from './GlobalHeader'
import GlobalFooter from './GlobalFooter'
import Drawer from '~/tool/Drawer'
import SiderMenu from '~/menu/SiderMenu'
import Setting from '~/setting/Setting'
import { mapState, mapMutations } from 'vuex'
import { triggerWindowResizeEvent } from 'utils/common'

let menuData = []

export default {
  name: 'GlobalLayout',
  components: {Setting, SiderMenu, Drawer, GlobalFooter, GlobalHeader},
  data () {
    return {
      collapsed: false,
      menuData: menuData
    }
  },
  computed: {
    ...mapState({
      settingBar: state => state.setting.settingBar.opened
    })
  },
  methods: {
    ...mapMutations({setSidebar: 'setting/setSidebar'}),
    toggleCollapse () {
      this.collapsed = !this.collapsed
      this.setSidebar(!this.collapsed)
      triggerWindowResizeEvent()
    },
    onDrawerChange (show) {
      this.collapsed = show
    },
    onMenuSelect () {
      this.toggleCollapse()
    }
  },
  beforeCreate () {
    let routers = this.$db.get('USER_ROUTER')
    menuData = routers.find((item) => item.path === '/').children.filter((menu) => {
      let meta = menu.meta
      if (typeof meta.isShow === 'undefined') {
        return true
      } else return meta.isShow
    })
  }
}
</script>

<style scoped>

</style>
