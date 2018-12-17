<template lang="html">
  <button
    :class="[
      `vl-switch-${color}`,
      {
        'vl-switch-active':isChecked || $attrs.checked
      }
    ]"
    :style="style"
    v-bind="$attrs"
    class="vl-component vl-switch"
    type="button"
    name="button"
    @click="toggleCheckbox($event)"
  >
    <input
      ref="inputCheckbox"
      :checked="value"
      :disabled="$attrs.disabled"
      class="input-switch vl-switch--input"
      type="checkbox"
      name=""
      value=""
      v-on="listeners"
    >

    <span
      ref="on"
      :class="{'active-text':isChecked || $attrs.checked}"
      class="text-on text-switch vl-switch--text"
    >
      <slot name="on" />

      <VlIcon
        class="icons-switch vl-switch--icon"
        :icon-pack="iconPack"
        :icon="vlIconOn || vlIcon"
      />
    </span>
    <span
      ref="off"
      :class="{'active-text':!isChecked && !$attrs.checked}"
      class="text-off text-switch vl-switch--text"
    >
      <!-- gato con botas -->
      <slot name="off" />
      <VlIcon
        class="icons-switch vl-switch--icon"
        :icon-pack="iconPack"
        :icon="vlIconOff || vlIcon"
      />
    </span>
    <span class="vl-circle-switch vl-switch--circle" />
  </button>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VlSwitch',
  inheritAttrs:false,
  props:{
    value:{},
    color:{
      default:'primary',
      type:String
    },
    vlIcon:{
      default:null,
      type:String
    },
    vlIconOn:{
      default:null,
      type:String
    },
    vlIconOff:{
      default:null,
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    vlValue:{}
  },
  data:()=>({
    widthx:42,
    checkboxClicked: false,
  }),
  computed:{
    style(){
      return {
        background: this.value?_color.getColor(this.color,1):null,
        width: `${this.widthx}px`
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        change: (evt) => {
          this.toggleValue(evt)
        }
      }
    },
    isChecked(){
      return this.isArrayx() ? this.isArrayIncludes() : this.value
    },
  },
  mounted(){
    this.$nextTick(()=>{
      let w = this.$refs.on.clientWidth>this.$refs.off.clientWidth?this.$refs.on.clientWidth:this.$refs.off.clientWidth
      this.widthx = w + 24
    })

  },
  methods:{
    toggleCheckbox() {
      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        this.$refs.inputCheckbox.checked = !this.$refs.inputCheckbox.checked;
        this.$emit('input', this.$refs.inputCheckbox.checked);
      }
    },
    toggleValue(evt){
      if(this.isArrayx()){
        this.setArray(evt)
      }
      else {
        this.$emit('input',evt.target.checked)
        this.$emit('change',evt)
      }
    },
    setArray(evt){
      const value = this.value.slice(0) // Copy Array.
      if(this.isArrayIncludes()){
        value.splice(value.indexOf(this.vlValue),1) // delete value
        this.$emit('input', value)
        this.$emit('change', evt)
      } else {
        value.push(this.vlValue) // add value new
        this.$emit('input', value)
        this.$emit('change', evt)
      }
    },
    isArrayIncludes(){
      let modelx = this.value
      let value = this.vlValue
      return modelx.includes(value)
    },
    isArrayx(){
      return Array.isArray(this.value)
    }
  },
}
</script>
