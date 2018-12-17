import vlComponent from './vlTable'
import vlComponent2 from './vlTh'
import vlComponent3 from './vlTr'
import vlComponent4 from './vlTd'

export default Vue => {
  Vue.component(vlComponent.name, vlComponent)
  Vue.component(vlComponent2.name, vlComponent2)
  Vue.component(vlComponent3.name, vlComponent3)
  Vue.component(vlComponent4.name, vlComponent4)
}
