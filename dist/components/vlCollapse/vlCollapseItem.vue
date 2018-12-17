<template>
  <div
    :class="{'open-item': maxHeight != '0px', 'disabledx': disabled}"
    class="vl-collapse-item"
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <header
      class="vl-collapse-item--header"
      @click="toggleContent"
    >
      <slot name="header" />

      <span
        v-if="!notArrow"
        class="icon-header vl-collapse-item--icon-header"
      >
        <vl-icon
          :icon-pack="iconPack"
          :icon="iconArrow"
        />
      </span>
    </header>
    <div
      ref="content"
      :style="styleContent"
      class="vl-collapse-item--content"
    >
      <div class="con-content--item">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>

import VlIcon from '../vlIcon';

export default {
  name:'VlCollapseItem',
  props:{
    disabled:{
      default:false,
      type: Boolean
    },
    notArrow:{
      default: false,
      type: Boolean
    },
    iconArrow:{
      default: 'keyboard_arrow_down',
      type: String
    },
    iconPack:{
      default: 'material-icons',
      type: String
    },
  },
  data:() => ({
    maxHeight: '0px'
  }),
  components:{
    VlIcon
  },
  computed:{
    accordion() {
      return this.$parent.accordion
    },
    openHover() {
      return this.$parent.openHover
    },
    styleContent() {
      return {
        maxHeight: this.maxHeight
      }
    }
  },
  watch:{
    maxHeight() {
      this.$parent.emitChange()
    }
  },
  mounted () {
    window.addEventListener('resize', this.changeHeight)
  },
  methods:{
    changeHeight () {
      let maxHeightx = this.$refs.content.scrollHeight
      if(this.maxHeight != '0px') {
        this.maxHeight = `${maxHeightx}px`
      }
    },
    toggleContent() {
      if(this.openHover || this.disabled) {
        return
      }

      if(this.accordion) {
        this.$parent.closeAllItems(this.$el)
      }

      let maxHeightx = this.$refs.content.scrollHeight
      if(this.maxHeight == '0px') {
        this.maxHeight = `${maxHeightx}px`
      } else {
        this.maxHeight = `0px`
      }
    },
    mouseover() {
      if(this.disabled) {
        return
      }
      let maxHeightx = this.$refs.content.scrollHeight
      if(this.openHover) {
        this.maxHeight = `${maxHeightx}px`
      }
    },
    mouseout() {
      if(this.openHover) {
        this.maxHeight = `0px`
      }
    }
  }
}
</script>
