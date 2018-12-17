import vlComponent from './vlList'
import vlComponent2 from './vlListItem'
import vlComponent3 from './vlListHeader'

export default Vue => {
  Vue.component(vlComponent.name, vlComponent)
  Vue.component(vlComponent2.name, vlComponent2)
  Vue.component(vlComponent3.name, vlComponent3)
}
