<template lang="html">
  <Transition name="dropdownx">
    <div
      v-if="dropdownVisible"
      ref="options"
      :class="{'rightx':rightx,'notHeight':notHeight}"
      :style="{
        'left':leftx+'px',
        'top':topx+'px'
      }"
      class="con-vl-dropdown--menu vl-dropdown-menu"
      @mouseover="toggleMenu($event)"
      @mouseout="toggleMenu($event)"
    >
      <ul
        v-if="!vlCustomContent"
        class="vl-component vl-dropdown--menu"
      >
        <slot />
      </ul>
      <div
        v-else
        class="vl-dropdown--custom vl-dropdown--menu"
      >
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "VlDropdownMenu",
  data:()=>({
    dropdownVisible:false,
    leftAfter:20,
    leftx:0,
    topx:0,
    rightx:true,
    vlTriggerClick:false,
    widthx:0,
    notHeight:false,
    vlCustomContent:false
  }),
  watch:{
    dropdownVisible(){
      let dropdownGroup = this.$children.filter((item)=>{
        return item.hasOwnProperty('activeGroup')
      })
      dropdownGroup.forEach((item_group)=>{
        item_group.activeGroup = false
      })
    }
  },
  mounted(){
    this.insertBody()
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el)
  },
  methods:{
    toggleMenu(event){
      if(event.type == 'mouseover' && !this.vlTriggerClick){
        this.dropdownVisible = true
      } else if (!this.vlTriggerClick) {
        this.dropdownVisible = false
      }
      this.widthx = this.$el.clientWidth
    },
    insertBody(){
      let elp = this.$el
      document.body.insertBefore(elp, document.body.firstChild)
    },
  }

}
</script>
