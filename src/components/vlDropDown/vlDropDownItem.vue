<template lang="html">
  <li
    :class="{'divider':divider}"
    :style="{
      'color':hoverx?giveColor()+' !important':null,
      'background':hoverx?giveColor(.01)+' !important':null
    }"
    class="vl-component vl-dropdown--item"
    @click="closeParent"
    @mouseover="hoverx=true"
    @mouseout="hoverx=false"
  >
    <RouterLink
      v-if="to"
      :to="to"
      v-bind="$attrs"
      :class="{'disabled':disabled}"
      class="vl-dropdown--item-link"
      v-on="$listeners"
    >
      {{ $attrs.disabled }}
      <slot />
    </RouterLink>

    <a
      v-else
      v-bind="$attrs"
      :class="{'disabled':disabled}"
      class="vl-dropdown--item-link"
      v-on="$listeners"
    >
      <slot />
    </a>
  </li>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name: "VlDropdownItem",
  inheritAttrs:false,
  props:{
    to:{},
    disabled:{
      default:false,
      type:Boolean
    },
    divider:{
      default:false,
      type:Boolean
    },
  },
  data:()=>({
    hoverx:false,
    vlDropDownItem:true,
    color:null
  }),
  mounted(){
    this.changeColor()
  },
  updated(){
    this.changeColor()
  },
  methods:{
    closeParent(){
      if(this.disabled){
        return
      }
      searchParent(this)
      function searchParent(_this){
        let parent = _this.$parent
        if(!parent.$el.className){
          return
        }
        if(parent.$el.className.indexOf('parent-dropdown')==-1){
          searchParent(parent)
        } else {
          let [dropdownMenu] = parent.$children.filter((item)=>{
            return item.hasOwnProperty('dropdownVisible')
          })
          dropdownMenu.dropdownVisible = parent.vlDropdownVisible = false

        }
      }
    },
    changeColor(){
      let _self = this
      searchParent(this)
      function searchParent(_this){
        let parent = _this.$parent
        if(!parent.$el.className){
          return
        }
        if(parent.$el.className.indexOf('parent-dropdown')==-1){
          searchParent(parent)
        } else {
          _self.color = parent.color
        }
      }
    },
    giveColor(opacity=1){
      return _color.rColor(this.color,opacity)
    },
  },

}
</script>
