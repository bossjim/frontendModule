import db from 'utils/localstorage'

export default {
  namespaced: true,
  state: {
    settingBar: {
      opened: false
    },
    systemName: 'DEER 权限系统',
    copyright: `${new Date().getFullYear()} <a href="https://github.com/bossjim/frontendModule" target="_blank">JimBoss</a>`,
    theme: db.get('THEME', 'light'),
    layout: db.get('LAYOUT', 'side'),
    multipage: getBooleanValue(db.get('MULTIPAGE'), true),
    fixSiderbar: getBooleanValue(db.get('FIX_SIDERBAR'), true),
    fixHeader: getBooleanValue(db.get('FIX_HEADER'), true),
    color: db.get('COLOR', 'rgb(24, 144, 255)')
  },
  mutations: {
    setTheme (state, theme) {
      db.save('THEME', theme)
      state.theme = theme
    },
    setLayout (state, layout) {
      db.save('LAYOUT', layout)
      state.layout = layout
    },
    setMultipage (state, multipage) {
      db.save('MULTIPAGE', multipage)
      state.multipage = multipage
    },
    fixSiderbar (state, flag) {
      db.save('FIX_SIDERBAR', flag)
      state.fixSiderbar = flag
    },
    fixHeader (state, flag) {
      db.save('FIX_HEADER', flag)
      state.fixHeader = flag
    },
    setSettingBar (state, flag) {
      state.settingBar.opened = flag
    },
    setColor (state, color) {
      db.save('COLOR', color)
      state.color = color
    }
  }
}

function getBooleanValue (value, defaultValue) {
  if (Object.is(value, null)) {
    return defaultValue
  }
  if (JSON.stringify(value) !== '{}') {
    return value
  } else {
    return false
  }
}
