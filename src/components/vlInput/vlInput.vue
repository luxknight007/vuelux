<template lang="html">
  <div
    ref="coninput"
    :style="styleLabel"
    :class="[`vl-input-${color}`,{
      'isFocus':isFocus,
      'input-icon-validate-success':success,
      'input-icon-validate-danger':danger,
      'input-icon-validate-warning':warning,
      'is-label-placeholder':labelPlaceholder
    }]"
    class="vl-component vl-con-input-label vl-input"
  >
    <label
      v-if="labelPlaceholder?false:label"
      class="vl-input--label"
      for=""
      @click="focusInput"
    >
      {{ label }}
    </label>
    <div class="vl-con-input">
      <input
        ref="vlinput"
        :style="style"
        :class="[size,{
          'hasValue':value != '',
          'hasIcon':icon,
          'icon-after-input':iconAfter
        }]"
        :placeholder="null"
        :value="value"
        v-bind="$attrs"
        :type="$attrs.type?$attrs.type:'text'"
        class="vl-inputx vl-input--input"
        v-on="listeners"
      >
      <Transition name="placeholderx">
        <span
          v-if="isValue&&(labelPlaceholder||$attrs.placeholder)"
          ref="spanplaceholder"
          :style="styleLabel"
          :class="[
            labelPlaceholder&&(size),
            size,
            {
              'vl-placeholder-label': labelPlaceholder,
            }]"
          class="input-span-placeholder vl-input--placeholder"
          @click="focusInput"
        >
          {{ $attrs.placeholder || labelPlaceholder }}
        </span>
      </Transition>

      <VlIcon
        v-if="icon"
        class="icon-inputx notranslate vl-input--icon"
        :class="{'icon-after':iconAfter}"
        :icon-pack="iconPack"
        :icon="icon"
        @click="focusInput"
      />

      <Transition name="icon-validate">
        <span
          v-if="success || danger || warning"
          class="input-icon-validate vl-input--icon-validate"
          :class="{'icon-before':iconAfter}"
        >
          <VlIcon
            :class="{'icon-before':iconAfter}"
            :icon-pack="iconPack"
            :icon="getIcon"
          />
        </span>
      </Transition>
    </div>

    <TransitionGroup
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="success"
        key="success"
        class="con-text-validation vl-input--text-validation"
      >
        <span class="span-text-validation span-text-validation-success vl-input--text-validation-span">
          {{
            successText
          }}
        </span>
      </div>
      <div
        v-else-if="danger"
        key="danger"
        class="con-text-validation span-text-validation-danger vl-input--text-validation-span"
      >
        <span class="span-text-validation">
          {{
            dangerText
          }}
        </span>
      </div>
      <div
        v-else-if="warning"
        key="warning"
        class="con-text-validation span-text-validation-warning vl-input--text-validation-span"
      >
        <span class="span-text-validation">
          {{
            warningText
          }}
        </span>
      </div>
      <div
        v-if="descriptionText"
        key="description"
        class="con-text-validation span-text-validation vl-input--text-validation-span"
      >
        <span class="span-text-validation">
          {{
            descriptionText
          }}
        </span>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VlInput',
  inheritAttrs: false,
  props:{
    value:{},
    labelPlaceholder:{
      default:null,
      type:[String,Number]
    },
    label:{
      default:null,
      type:[String,Number]
    },
    icon:{
      default:null,
      type:String
    },
    iconAfter:{
      default:false,
      type:[Boolean,String]
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    color:{
      default:'primary',
      type:String
    },
    success:{
      default:false,
      type:Boolean
    },
    danger:{
      default:false,
      type:Boolean
    },
    warning:{
      default:false,
      type:Boolean
    },
    successText:{
      default: null,
      type:String
    },
    dangerText:{
      default: null,
      type:String
    },
    warningText:{
      default: null,
      type:String
    },
    descriptionText:{
      default: null,
      type:String
    },
    size:{
      default:'normal',
      type:String
    },
    valIconSuccess:{
      default: null,
      type:String
    },
    valIconDanger:{
      default: null,
      type:String
    },
    valIconWarning:{
      default: null,
      type:String
    },
  },
  data:()=>({
    isFocus:false
  }),
  computed:{
    style(){
      return {
        border: `1px solid ${this.isFocus?_color.getColor(this.color,1):'rgba(0, 0, 0,.2)'}`,
      }
    },
    styleLabel(){
      return {
        color: this.isFocus?_color.getColor(this.color,1):null,
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        input: (evt) => {
          this.$emit('input',evt.target.value)
        },
        focus: (evt) => {
          this.$emit('focus',evt)
          this.changeFocus(true)
        },
        blur: (evt) => {
          this.$emit('blur',evt)
          this.changeFocus(false)
        }
      }
    },
    isValue(){
      return this.labelPlaceholder?true:!this.value
    },
    getIcon(){
      return this.danger  ? this.valIconDanger
           : this.warning ? this.valIconWarning
           : this.success ? this.valIconSuccess
           : ''
    },
  },
  methods:{
    // animation
    changeFocus(booleanx) {
      this.isFocus = booleanx
    },
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el, done){
      let h = el.scrollHeight
      el.style.height = h + 'px'
      done()
    },
    leave: function (el) {
      el.style.height = 0 + 'px'
    },
    focusInput(){
      this.$refs.vlinput.focus()
    }
  },
}
</script>
