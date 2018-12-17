<template>
  <div
    :class="{'withHover': actionable, 'fixedHeight': fixedHeight }"
    class="con-vl-card"
  >
    <header
      v-if="hasSlot('header')"
      class="vl-card--header"
    >
      <slot name="header" />
    </header>

    <div
      v-if="hasSlot('media')"
      class="vl-card--media"
    >
      <slot name="media" />
    </div>

    <div
      v-if="hasSlot('default')"
      :class="{'fixedHeight': fixedHeight }"
      class="vl-card--content"
    >
      <slot />
    </div>

    <div
      v-if="hasSlot('extra-content')"
      class="vl-card-extra--content"
    >
      <slot name="extra-content" />
    </div>

    <footer
      v-if="hasSlot('footer')"
      :class="{'fixedHeight': fixedHeight }"
      class="vl-card--footer"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'VlCard',
    props:{
      actionable: {
        default: false,
        type: Boolean
      },
      fixedHeight: {
        default: false,
        type: Boolean
      }
    },
    methods: {
      hasSlot(slot) {
        return this.$slots[slot]
      }
    }
  }
</script>
