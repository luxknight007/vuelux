import * as vlComponents from './components'
import './styles/index.styl'
import vlFunctions from './functions'
import easing from './utils/easing.js'
import vlTheme from './utils/theme.js'

const Vuelux = {
  install(Vue, options) {
    //change defaults colors, Not Soport SSR, else = Stylus vars
    if(options){
      if(options.hasOwnProperty('theme')){
        if(options.theme.hasOwnProperty('colors')){
          if (typeof window !== 'undefined') {
            vlTheme.vsfunction(options.theme.colors, options.server)
          }
        }
      }
    }

    Object.values(vlComponents).forEach((vlComponent) => {
      Vue.use(vlComponent)
    })

    vlFunctions(Vue)

    Vue.prototype.$vl.easing = easing
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuelux)
}
export default Vuelux
