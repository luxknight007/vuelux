<template lang="html">
  <Transition :name="invert?vertical?'fade-tab-vertical-invert':'fade-tab-invert':vertical?'fade-tab-vertical':'fade-tab'">
    <div
      v-if="active"
      class="con-tab vl-tabs--content"
    >
      <slot />
    </div>
  </Transition>
</template>

<script>
export default {
  name:'VlTab',
  inheritAttrs: false,
  props:{
    vlLabel:{
      default:'Label',
      type:String
    }
  },
  data:()=>({
    vertical:false,
    active:false,
    id:null,
    invert:false
  }),
  mounted(){
    this.id = this.$parent.children.length
    this.$parent.children.push({
      label: this.vlLabel,
      id: this.$parent.children.length,
      listeners: this.$listeners,
      attrs: this.$attrs
    })
  }
}
</script>
