// Functions

import vlNotifications from './vlNotifications/index.js'
import vlLoading from './vlLoading/index.js'
import vlDialog from './vlDialog/index.js'
//theme
import vlTheme from '../utils/theme.js'


const vlFunctions = {
  vlNotifications,
  vlLoading,
  vlTheme,
  vlDialog
}

export default Vue => {
  Vue.prototype.$vl = {}
  Object.values(vlFunctions).forEach((vlFunctions) => {
    if(vlFunctions.hasOwnProperty('subName')){
      Vue.prototype.$vl[vlFunctions.name][vlFunctions.subName] = vlFunctions.vlfunction
    } else {
      Vue.prototype.$vl[vlFunctions.name] = vlFunctions.vlfunction
    }
  })

  Vue.prototype.$vl.loading.close = vlLoading.close
}
