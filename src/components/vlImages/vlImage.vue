<template>
  <li class="vl-image">
    <div class="con-vl-image">
      <div
        :v-bind="$attrs"
        :style="styleImage"
        class="vl-image--img"
        @click="selected($attrs)"
      />
    </div>
    <img
      :src="src"
      class="imag-blur"
      alt=""
    >
  </li>
</template>
<script>
export default {
  name: 'VlImage',
  inheritAttrs: false,
  props:{
    src:{
      default: null,
      type: String
    }
  },
  computed:{
    styleImage () {
      return {
        backgroundImage: `url(${this.src})`
      }
    }
  },
  methods: {
    selected (attrs) {
      this.$emit('selected', attrs)
    }
  }
}
</script>
