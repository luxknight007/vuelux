<template lang="html">
  <label
    :class="[`vl-radio-${color}`]"
    class="vl-component con-vl-radio"
  >
    <input
      v-bind="$attrs"
      :checked="isChecked"
      :value="value"
      type="radio"
      class="vl-radio--input"
      v-on="listeners"
    >
    <span
      class="vl-radio"
    >
      <span
        :style="styles"
        class="vl-radio--borde"
      />
      <span
        :style="styleCircle"
        class="vl-radio--circle"
      />
    </span>
    <span class="vl-radio--label">
      <slot />
    </span>
  </label>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VlRadio',
  inheritAttrs:false,
  props:{
    value:{},
    vlValue:{},
    color:{
      default:'primary',
      type:String
    }
  },
  computed:{
    listeners(){
      return {
        ...this.$listeners,
        input: () => this.$emit('input', this.vlValue)
      }
    },
    attrs(){
      let attrsx = JSON.parse(JSON.stringify(this.$attrs))
      return {
        attrsx
      }
    },
    isChecked(){
      return this.vlValue == this.value
    },
    styles(){
      return {
        'border': `2px solid ${this.isChecked?_color.getColor(this.color,1):'rgb(200, 200, 200)'}`
      }
    },
    styleCircle(){
      return {
        'background': _color.getColor(this.color,1),
        'box-shadow': `0px 3px 12px 0px ${_color.getColor(this.color,.4)}`
      }
    }
  },
  methods:{
    giveColor(color,opacity){
      return _color.rColor(color,opacity)
    },
  }
}
</script>
