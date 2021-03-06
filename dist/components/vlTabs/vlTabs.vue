<template lang="html">
  <div
    :class="[`vl-tabs-${color}`,`vl-tabs-position-${vlPosition}`]"
    class="con-vl-tabs vl-tabs"
  >
    <div
      :style="styleTabs"
      class="con-ul-tabs"
    >
      <ul
        ref="ul"
        :class="[`ul-tabs-${vlAlignment}`]"
        class="ul-tabs vl-tabs--ul"
      >
        <li
          v-for="(child,index) in children" 
          :key="index"
          ref="li"
          :class="{'activeChild':childActive == index}"
          class="vl-tabs--li"
          @mouseover="hover = true"
          @mouseout="hover = false"
          @click="activeChild(index)"
        >
          <button
            v-bind="child.attrs"
            type="button"
            v-on="child.listeners"
          >
            {{ child.label }}
          </button>
        </li>
      </ul>
      <span
        :style="stylex"
        class="line-vl-tabs"
      />
    </div>
    <div class="con-slot-tabs">
      <slot />
    </div>
  </div>
</template>

<script>
import _color from '../../utils/color.js'

export default {
  name:'VlTabs',
  components:{},
  props:{
    value: {
      default: 0,
      type: [Number, String],
    },
    color:{
      default:'primary',
      type: String
    },
    vlAlignment:{
      default:'left',
      type:String,
    },
    vlPosition:{
      default:'top',
      type:String
    }
  },
  data:()=>({
    topx:'auto',
    heightx:2,
    hover:false,
    children:[],
    childActive:0,
    leftx:0,
    widthx:0,
    these:false,
  }),
  computed:{
    styleTabs(){
      return {
        color: _color.getColor(this.color,1),
      }
    },
    stylex(){
      return {
        top: `${this.topx}px`,
        left: `${this.leftx}px`,
        width: `${this.widthx}px`,
        height: `${this.heightx}px`,
        background: `linear-gradient(30deg, ${_color.getColor(this.color,1)} 0%, ${_color.getColor(this.color,.5)} 100%)`,
        boxShadow: `0px 0px 8px 0px ${_color.getColor(this.color,.5)}`,
        transform: `scaleX(${this.these?1.3:1})`
      }
    }
  },
  watch: {
    value(index) {
      const activeIndex = this.parseIndex(index)
      this.activeChild(activeIndex)
    },
  },
  mounted(){
    const activeIndex = this.parseIndex(this.value)
    this.childActive = activeIndex
    this.$nextTick(() => {
      this.activeChild(activeIndex, true)
    })
  },
  methods:{
    parseIndex(index) {
      let activeIndex = this.childActive
      if (index < 0) {
        activeIndex = 0
      } else if (index >= this.$children.length) {
        activeIndex = this.$children.length - 1;
      } else if (typeof this.$children[index].$attrs.disabled === 'undefined') {
        activeIndex = parseInt(index);
      }
      return activeIndex;
    },
    activeChild(index, initialAnimation){
      initialAnimation = !!initialAnimation;
      const elem = this.$refs.li[index]
      if(this.childActive == index && !initialAnimation){
        this.these = true
        elem.classList.add('isActive')
        setTimeout(()=>{
          elem.classList.remove('isActive')
          this.these = false
        }, 200);
      }

      this.$children.map((item,item_index)=>{
        if(item_index != index) {
          item.active = false
        }
      })

      if(this.childActive > index){
        this.$children[index].invert = true
        this.$children[this.childActive].invert = false
      } else {
        this.$children[this.childActive].invert = true
        this.$children[index].invert = false
      }

      this.$children[index].active = true
      this.childActive = index
      this.$emit('input', this.childActive)

      if(this.vlPosition == 'left' || this.vlPosition == 'right'){
        this.$children[index].vertical = true
      }

      this.changePositionLine(elem, initialAnimation)

    },
    changePositionLine(elem, initialAnimation){
      if(this.vlPosition == 'left' || this.vlPosition == 'right'){
        this.topx = elem.offsetTop
        this.heightx = elem.offsetHeight
        this.widthx = 2
      } else {
        const update = () => {
          this.leftx = elem.offsetLeft
          this.widthx = elem.offsetWidth
        }
        if (!initialAnimation) {
          update()
        } else {
          setTimeout(update, 100)
        }
      }
    }
  }
}
</script>
