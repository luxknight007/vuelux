<template lang="html">
  <Transition name="popup-t">
    <div
      v-show="active"
      ref="con"
      :class="[`vl-popup-${color}`,{'fullscreen':fullscreen}, {'confirmation':confirmation}]"
      class="vl-component con-vl-popup"
      @click="close($event,true)"
    >
      <div
        :style="styleCon"
        class="vl-popup--background"
      />
      <div
        ref="popupx"
        :style="stylePopup"
        class="vl-popup"
      >
        <!-- //header -->
        <header
          :style="styleHeader"
          class="vl-popup--header"
        >
          <div class="vl-popup--title">
            <h3>{{ title }}</h3>
          </div>
          <VlIcon
            v-if="!buttonCloseHidden"
            ref="btnclose"
            :icon-pack="iconPack"
            :icon="iconClose"
            class="vl-popup--close vl-popup--close--icon"
            @click="close"
          />
        </header>

        <!-- // slots  -->
        <div
          :style="styleContent"
          :class="classContent"
          class="vl-popup--content"
        >
          <slot />
        </div>
        <footer v-if="type=='form'" class="vl-popup--footer">
          <VlButton
            :color="colorSave"
            :type="buttonType"
            @click="acceptForm"
          >
            {{acceptFormText}}
          </VlButton>
          <VlButton
            :color="colorCancel"
            :type="buttonType"
            @click="cancelForm"
          >
            {{cancelFormText}}
          </VlButton>
        </footer>
        <footer v-if="type=='basic'" class="vl-popup--footer">
          <VlButton
            :color="colorCancel"
            :type="buttonType"
            @click="cancelForm"
          >
            {{cancelFormText}}
          </VlButton>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VlPopup',
  props:{
    colorCancel:{
      default:'dark',
      type:String
    },
    acceptFormText:{
      default:'Save',
      type:String
    },
    cancelFormText:{
      default:'Cancel',
      type:String
    },
    colorSave:{
      default:'primary',
      type:String
    },
    buttonType:{
      default:'filled',
      type:String
    },
    active: {
      default:false,
      type:Boolean
    },
    title:{
      default:'popup',
      type:String
    },
    type:{
      default:'popup',
      type:String
    },
    buttonCloseHidden:{
      default:false,
      type:Boolean
    },
    fullscreen:{
      default:false,
      type:Boolean
    },
    confirmation:{
      default:false,
      type:Boolean
    },
    backgroundColor:{
      default:null,
      type:String
    },
    backgroundColorPopup:{
      default:'rgb(255,255,255)',
      type:String
    },
    styleContent:{
      default:null,
      type: String
    },
    classContent:{
      default:null,
      type: String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    iconClose:{
      default:'close',
      type:String
    },
  },
  computed:{
    styleHeader(){
      return {
        color: _color.getColor(this.color,1),
      }
    },
    styleAfter(){
      return {
        background: _color.getColor(this.color,1)
      }
    },
    styleCon(){
      return {
        background: _color.getColor(this.backgroundColor,1)
      }
    },
    stylePopup(){
      return {
        background: _color.getColor(this.backgroundColorPopup,1)
      }
    }
  },
  mounted(){
    this.insertBody()
  },
  methods:{
    acceptForm(){
      this.$emit('vl-accept', true)
    },
    cancelForm(){
      this.$emit('update:active',false)
      this.$emit('close', false)
    },
    giveColor(color){
      return _color.rColor(color)
    },
    close(event,con){
      if(con){
        if(event.target.className.indexOf('vl-popup--background')!=-1){
          this.$emit('update:active',false)
          this.$emit('close', false)
        } else if(event.toElement == this.$refs.btnclose.$el){
          this.$emit('update:active',false)
          this.$emit('close', false)
        }
      }
    },
    insertBody(){
      let elx = this.$refs.con
      document.body.insertBefore(elx, document.body.firstChild)
    },
  }
}
</script>
