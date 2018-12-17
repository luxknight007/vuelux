<template lang="html">
  <div
    :style="styleChip"
    :class="[
      `vl-chip-${color}`,
      {
        'closable': closable,
        'con-color': color
      }
    ]"
    class="con-vl-chip"
  >
    <span class="text-chip vl-chip--text">
      <slot />
    </span>

    <button
      v-if="closable"
      class="btn-close vl-chip--close"
      @click="closeChip"
    >
      <VlIcon
        :icon-pack="iconPack"
        :icon="closeIcon"
      />
    </button>
  </div>
</template>

<script>
import _color from '../../utils/color.js'

export default {
  name:'VlChip',
  props:{
    item:{
      type:Boolean,
    },
    value:{},
    active:{
      type:Boolean,
      default:true,
    },
    text:{
      type:String,
      default:null,
    },
    closable:{
      type:[Boolean,String],
      default:false,
    },
    color:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null,
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    closeIcon:{
      type:String,
      default:'clear',
    },
  },
  computed:{
    styleChip () {
      return {
        background: _color.getColor(this.color,1),
        color: this.color?'rgba(255,255,255,.9)':'rgba(0,0,0,.7)'
      }
    },
    eliminado(){
      if(this.item){
        return true
      } else {
        if(this.vlClosable){
          return this.value
        } else {
          return true
        }
      }
    }
  },
  methods:{
    closeChip () {
      this.$emit('input',false)
      this.$emit('click')
    },
    remove(){
      this.$emit('vl-remove', false)
      this.$emit('input', false)
    }
  }
}
</script>
