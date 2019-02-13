<template lang="html">
  <header
    :style="[styleNavbar]"
    :class="[`vl-navbar-${type}`]"
    class="vl-navbar"
  >
    <slot />
  </header>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VlNavbar',
  props:{
    value:{},
    type:{
      default: null,
      type: String
    },
    color:{
      type:String,
      default:'transparent',
    },
    activeTextColor: {
      type:String,
      default:'primary',
    },
    textColor: {
      type:String,
      default:'rgb(40,40,40)',
    },
    background: {
      type: String,
      default: null
    }
  },
  computed:{
    styleNavbar () {
      if(_color.isColor(this.color)) {
        return {
          background: `rgb(${_color.changeColor(this.color)})`
        }
      }
      if (this.background) {
        return this.background
      }
      return {
        background: _color.getColor(this.color)
      }
    }
  },
  methods: {
    changeIndex (index) {
      this.$emit('input', index)
    }
  }
}
</script>
