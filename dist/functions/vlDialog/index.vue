<template lang="html">
  <Transition name="dialog-t">
    <div
      v-if="active || vlActive"
      ref="con"
      :class="[`vl-dialog-${isPrompt?vlColor:color}`]"
      class="vl-component con-vl-dialog"
    >
      <div
        class="vl-dialog-dark"
        @click="close($event,true)"
      />
      <div
        ref="dialogx"
        class="vl-dialog"
      >
        <!-- //header -->
        <header :style="styleHeader">
          <div class="con-title-after">
            <span
              :style="styleAfter"
              class="after"
            />
            <h3>{{ title || vlTitle }}</h3>
          </div>
          <VlIcon
            v-if="type=='alert'"
            :icon="vlCloseIcon"
            :click="close"
            :icon-pack="vlIconPack"
            class="vl-dialog-cancel vl-dialog-cancel--icon notranslate"
          />
        </header>

        <!-- // slots  -->
        <div class="vl-dialog-text">
          <slot />
          {{ text }}
        </div>
        <!-- footer buttons -->
        <footer v-if="vlButtonsHidden?false:isPrompt||type=='confirm'">
          <VlButton
            :disabled="vlIsValid=='none'?false:!vlIsValid"
            :color="isPrompt?vlColor:color"
            :type="isPrompt?vlButtonAccept:buttonAccept"
            @click="acceptDialog"
          >
            {{ isPrompt?vlAcceptText:acceptText }}
          </VlButton>
          <VlButton
            :color="'rgb(0,0,0,.5)'"
            :type="isPrompt?vlButtonCancel:buttonCancel"
            @click="cancelClose"
          >
            {{ isPrompt?vlCancelText:cancelText }}
          </VlButton>
        </footer>

        <footer v-if="type=='alert'&&!isPrompt">
          <VlButton
            :color="isPrompt?vlColor:color"
            :type="buttonAccept"
            @click="acceptDialog"
          >
            {{ isPrompt?vlAcceptText:acceptText }}
          </VlButton>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VlPrompt',
  props:{
    vlColor:{
      default:'primary',
      type:String
    },
    vlActive:{
      default:false,
      type: Boolean
    },
    vlTitle:{
      default:'Dialog',
      type:String
    },
    vlButtonAccept:{
      default:'filled',
      type:String,
    },
    vlButtonCancel:{
      default:'flat',
      type:String,
    },
    vlIsValid:{
      default:'none',
      type:[Boolean,String]
    },
    vlButtonsHidden:{
      default:false,
      type:Boolean
    },
    vlAcceptText:{
      default:'Accept',
      type:String
    },
    vlCancelText:{
      default:'Cancel',
      type:String
    },
    vlIconPack:{
      default:'material-icons',
      type:String
    },
    vlCloseIcon:{
      default:'close',
      type:String
    }
  },
  data:()=>({
    isPrompt:true,
    active:false,
    type:'alert',
    color:'primary',
    text:null,
    title:null,
    buttonAccept:'filled',
    buttonCancel:'flat',
    acceptText:'Accept',
    cancelText:'Cancel',
    closeIcon:'close',
    iconPack:'material-icons'
  }),
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
    }
  },
  watch:{
    vlActive() {
      this.$nextTick(() => {
        if (this.vlActive) {
          this.insertBody()
        }
      })
    }
  },
  mounted () {
    if (this.active && this.isPrompt) {
      this.insertBody()
    }
  },
  methods:{
    giveColor(color){
      return _color.rColor(color)
    },
    acceptDialog(){
      if(!this.isPrompt){
        this.accept?this.accept():null
        this.active = false
        this.$emit('update:vlActive',false)
        this.$emit('vl-accept')
      } else {
        if (this.vlIsValid || this.vlIsValid == 'none') {
          this.accept?this.accept():null
          this.active = false
          this.$emit('update:vlActive',false)
          this.$emit('vl-accept')
        } else {
          this.rebound()
        }
      }

    },
    rebound(){
      this.$refs.dialogx.classList.add('locked')
      setTimeout( () => {
        this.$refs.dialogx.classList.remove('locked')
      }, 200);
    },
    close(event,con){
      if(con){
        if(event.target.className.indexOf('vl-dialog-dark')!=-1 && this.type == 'alert'){
          this.active = false
          this.$emit('update:vlActive',false)
        } else if (event.target.className.indexOf('vl-dialog-dark')!=-1) {
          this.rebound()
        }
      } else {
        if(event?event.target.className.indexOf('vl-dialog-cancel')!=-1:event?event.target.className.indexOf('vl-dialog-cancel--icon')!=-1:false ){
          this.active = false
          this.$emit('update:vlActive',false)
        }
      }
      this.$emit('vl-close')
    },
    cancelClose(){
      this.active = false
      this.$emit('update:vlActive',false)
      this.$emit('vl-cancel')
      this.cancel?this.cancel():null
    },
    insertBody(){
      let elx = this.$refs.con
      document.body.insertBefore(elx, document.body.firstChild)
    },
  }
}
</script>
