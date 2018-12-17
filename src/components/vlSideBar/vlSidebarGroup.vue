<template>
  <div
    :class="{'vl-sidebar-group-open' : openItems}"
    class="vl-sidebar-group"
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <h4 @click="clickGroup">
      {{ title }} <VlIcon>keyboard_arrow_down</VlIcon>
    </h4>
    <span class="vl-sidebar--tooltip">
      {{ title }}
    </span>
    <ul
      ref="items"
      :style="styleItems"
      class="vl-sidebar--group-items"
    >
      <slot />
    </ul>
  </div>
</template>
<script>
export default {
  name:'VlSidebarGroup',
  props: {
    collapsed: {
      default: false,
      type: Boolean
    },
    title: {
      default: null,
      type: String
    },
    openHover: {
      default: false,
      type: Boolean
    },
    open: {
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    maxHeight: '0px',
    openItems: false
  }),
  computed:{
    styleItems() {
      return {
        maxHeight: this.maxHeight
      }
    }
  },
  watch: {
    maxHeight () {
      this.openItems = this.maxHeight != '0px'

    }
  },
  mounted () {
    this.openItems = this.open
    if(this.open) {
      this.maxHeight = 'none'
    }
  },
  methods:{
    getActive () {
      return this.$parent.getActive()
    },
    setIndexActive (index) {
      this.$parent.setIndexActive(index)
    },
    clickGroup() {
      if(!this.openHover) {
        let scrollHeight = this.$refs.items.scrollHeight
        if(this.maxHeight == '0px') {
          this.maxHeight = `${scrollHeight}px`
          setTimeout(() => {
            this.maxHeight = 'none'
          },300)
        } else {
          this.maxHeight = `${scrollHeight}px`
          setTimeout(() => {
            this.maxHeight = `${0}px`
          }, 50)
        }
      }
    },
    mouseover() {
      if(this.openHover) {
        let scrollHeight = this.$refs.items.scrollHeight
        this.maxHeight = `${scrollHeight}px`
      }
    },
    mouseout() {
      if(this.openHover) {
        let scrollHeight = 0
        this.maxHeight = `${scrollHeight}px`
      }
    }
  }
}
</script>
