<template lang="html">
  <li
    :class="{'marginIcon':vlCollapse, 'no-cascading':!vlCollapse, 'group-rightx':rightx}"
    class="vl-component vl-dropdown--group"
    @mouseout="toggleGroup($event)"
    @mouseover="toggleGroup($event)"
  >
    <span
      v-if="vlCollapse"
      class="span vl-dropdown--group-label"
    >
      {{ vlLabel }}
    </span>
    <h3 v-else>
      {{ vlLabel }}
    </h3>
    <VlIcon
      v-if="vlCollapse"
      class="icon-group notranslate vl-dropdown--group-icon"
      :icon-pack="iconPack"
      :icon="vlIcon"
    />
    <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="activeGroup||!vlCollapse"
        ref="ulx"
        :class="{'con-dropdown-group-no-cascading':!vlCollapse}"
        class="con-dropdown--group-con-ul"
      >
        <ul class="con-dropdown--group-ul">
          <slot />
        </ul>
      </div>
    </Transition>
  </li>
</template>

<script>
export default {
  name:'VlDropdownGroup',
  props:{
    vlLabel:{
      default:'Options',
      type:String
    },
    vlCollapse:{
      default:false,
      type:Boolean
    },
    vlIcon: {
      default: 'keyboard_arrow_right',
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    }
  },
  data:()=>({
    activeGroup:false,
    rightx:false,
    widthx:0,
  }),
  methods:{
    beforeEnter(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter(el, done){
      let h = this.$refs.ulx.scrollHeight
      this.$refs.ulx.style.height = h + 'px'
      el.style.opacity = 1
      parents(this)
      function parents(_this){
        if(_this.$parent.$el.className.search('vl-dropdown--group')!=-1){
          // this.$parent.$el
          let hp = _this.$parent.$refs.ulx.scrollHeight
          _this.$parent.$refs.ulx.style.height = hp + h + 'px'
          parents(_this.$parent)
        }
      }

      done()
    },
    leave: function (el) {
      let __this = this
      addParents(this)
      function addParents(_this){
        if(_this.$parent.$refs.ulx){
          let hp = _this.$parent.$refs.ulx.scrollHeight - __this.$refs.ulx.scrollHeight
          _this.$parent.$refs.ulx.style.height = hp + 'px'
          addParents(_this.$parent)
        }
      }
      if(!this.$parent.$refs.ulx){
        this.$refs.ulx.style.height = 0 + 'px'
      }
      this.$refs.ulx.style.height = 0 + 'px'
      el.style.opacity = 0
    },
    toggleGroup(){
      this.activeGroup = !this.activeGroup
    }
  },
}
</script>
