<template lang="html">
  <div
    :class="[`vl-images-hover-${hover}`, {'alternating': alternating, 'notBorderRadius': notBorderRadius, 'notMargin': notMargin}]"
    class="vl-component vl-images"
  >
    <ul class="vl-ul-images vl-images--ul">
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  name: "VlImages",
  inheritAttrs:false,
  props:{
    hover:{
      default:'default',
      type: String
    },
    alternating: {
      default: false,
      type: Boolean
    },
    notBorderRadius:{
      default: false,
      type: Boolean
    },
    notMargin:{
      default: false,
      type: Boolean
    }
  },
  data:()=>({

  }),
}
</script>
