<template>
  <global-layout>
  </global-layout>
</template>

<script>
import GlobalLayout from './GlobalLayout'
import Contextmenu from '~/menu/Contextmenu'

export default {
  name: 'MenuView',
  components: {Contextmenu, GlobalLayout}
}
</script>

<style scoped>
  >>>.ant-tabs-tab{
    margin-right: 1px !important;
  }
</style>
