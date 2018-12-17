<template>
  <Transition name="vl-sidebar-animate">
    <div
      v-show="staticPosition || value"
      ref="sidebarbackground"
      class="vl-content-sidebar"
    >
      <div
        v-if="!hiddenBackground"
        class="vl-sidebar--background"
      />
      <div
        :class="[
          `vl-sidebar-${color}`,
          {
            'vl-sidebar-parent': parent != 'body',
            'vl-sidebar-staticPosition': staticPosition,
            'vl-sidebar-position-right': positionRight,
            'vl-sidebar-reduce': reduce,
            'vl-sidebar-reduceNotRebound': reduceNotRebound,
            'vl-sidebar-reduceNotHoverExpand': reduceNotHoverExpand
          }
        ]"
        class="vl-sidebar"
      >
        <header
          class="vl-sidebar--header"
          v-if="$slots.header"
        >
          <slot name="header" />
        </header>

        <div class="vl-sidebar--items">
          <slot />
        </div>

        <VlSpacer v-if="spacer" />

        <footer
          class="vl-sidebar--footer"
          v-if="$slots.footer"
        >
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name:'VlSidebar',
  props:{
    value:{
      default: false
    },
    defaultIndex:{
      default: null,
      type: [String, Number]
    },
    color: {
      default:'primary',
      type: String
    },
    parent:{
      default: null,
      type: [String, Object]
    },
    spacer: {
      default: false,
      type: Boolean
    },
    staticPosition: {
      default: false,
      type: Boolean
    },
    positionRight: {
      default: false,
      type:Boolean
    },
    clickNotClose: {
      default: false,
      type: Boolean
    },
    reduce: {
      default: false,
      type: Boolean
    },
    reduceNotRebound:{
      default: false,
      type: Boolean
    },
    reduceNotHoverExpand: {
      default: false,
      type: Boolean
    },
    hiddenBackground: {
      default:false,
      type: Boolean
    }
  },
  data: () => ({
    currentIndex: 0
  }),
  watch: {
    value() {
      if(this.value && !this.clickNotClose) {
        this.addEventClick()
      }
    }
  },
  created () {
    this.currentIndex = this.defaultIndex
  },
  mounted () {
    this.insertBody()
  },
  methods:{
    getActive () {
      return this.currentIndex
    },
    setIndexActive (index) {
      this.currentIndex = index
    },
    addEventClick () {
      window.addEventListener('click', this.closeSidebar)
    },
    closeSidebar (evt) {
      let parent = evt.target.closest('.vl-sidebar')
      if (!parent) {
        this.$emit('input', false)
        window.removeEventListener('click', this.closeSidebar)
      }
    },
    insertBody () {
      if(this.parent) {
        let elx = this.$refs.sidebarbackground
        let parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent
        parentx.insertBefore(elx, parentx.firstChild)
      }

    },
  }
}
</script>
