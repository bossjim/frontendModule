import Vue from 'vue'

import {hasPermission, hasAnyPermission, hasNoPermission} from 'utils/permissionDirect'

const Plugins = [
  hasPermission,
  hasAnyPermission,
  hasNoPermission
]

Plugins.map((plugin) => {
  Vue.use(plugin)
})

export default Vue
