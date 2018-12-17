import vlComponent from './vlSelect'
import vlComponent2 from './vlSelectItem'
import vlComponent3 from './vlSelectGroup'

export default Vue => {
  Vue.component(vlComponent.name, vlComponent)
  Vue.component(vlComponent2.name, vlComponent2)
  Vue.component(vlComponent3.name, vlComponent3)
}
