import vlComponent from './vlNavbar'
import vlComponent2 from './vlNavItem'
import vlComponent3 from './vlNavGroup'
import vlComponent4 from './vlNavbarTitle'
import vlComponent5 from './vlNavbarItems'

export default Vue => {
  Vue.component(vlComponent.name, vlComponent)
  Vue.component(vlComponent2.name, vlComponent2)
  Vue.component(vlComponent3.name, vlComponent3)
  Vue.component(vlComponent4.name, vlComponent4)
  Vue.component(vlComponent5.name, vlComponent5)
}
