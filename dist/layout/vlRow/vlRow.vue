<template lang="html">
  <div
    :style="{
      'align-items':vlAlign,
      'justify-content':vlJustify,
      'display':vlType,
      'overflow': vlType === 'block' ? 'hidden' : null,
      'width':vlW*100/12+'%'}"
    class="vl-row"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'VlRow',
    props: {
      vlType: {
        default: 'flex',
        type: String,
      },
      vlW: {
        type: [Number, String],
        default: 12,
      },
      vlJustify: {
        type: String,
        default: null,
      },
      vlAlign: {
        type: String,
        default: null,
      },
    }
  }
</script>

<style lang="css">
  .vl-row {
    clear: both;
    flex-flow: wrap;
  }
</style>
