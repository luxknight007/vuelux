import vlComponent from './vlTabs'
import vlComponent2 from './vlTab'

export default Vue => {
  Vue.component(vlComponent.name, vlComponent)
  Vue.component(vlComponent2.name, vlComponent2)
}
