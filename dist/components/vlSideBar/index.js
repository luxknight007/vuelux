import vlComponent from './vlSidebar'
import vlComponent2 from './vlSidebarItem'
import vlComponent3 from './vlSidebarGroup'

export default Vue => {
  Vue.component(vlComponent.name, vlComponent)
  Vue.component(vlComponent2.name, vlComponent2)
  Vue.component(vlComponent3.name, vlComponent3)
}
