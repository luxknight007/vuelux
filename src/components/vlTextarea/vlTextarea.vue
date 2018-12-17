<template lang="html">
  <div
    :class="{'textarea-danger': counter ? value.length > counter : false, 'focusx': focusx}"
    class="vl-component vl-con-textarea"
  >
    <h4 v-if="label">
      {{ label }}
    </h4>

    <textarea
      :value="value"
      v-bind="$attrs"
      class="vl-textarea"
      v-on="listeners"
    />

    <div
      v-if="counter"
      class="count vl-textarea--count"
    >
      {{ value.length }} / {{ counter }}
    </div>
  </div>
</template>

<script>
export default {
  name: "VlTextarea",
  inheritAttrs:false,
  props:{
    value:{},
    label:{
      default:null,
      type: String
    },
    counter:{
      default: null,
      type: [Number, String]
    },
    counterDanger:{
      default: false,
      type: Boolean
    }
  },
  data:()=>({
    focusx: false
  }),
  computed:{
    listeners() {
      return {
        ...this.$listeners,
        input:(evt) => {
          this.$emit('input', evt.target.value)
        },
        focus:() => {
          this.focus()
        },
        blur:() => {
          this.blur()
        }
      }
    }
  },
  watch:{
    value() {
      if(this.value.length > this.counter) {
        this.$emit('update:counterDanger', true)
      } else {
        this.$emit('update:counterDanger', false)
      }
    }
  },
  methods:{
    focus() {
      this.focusx = true
    },
    blur() {
      this.focusx = false
    }
  }
}
</script>
