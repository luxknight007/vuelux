<template lang="html">
  <nav
    v-bind="$attrs"
    :class="`vl-align-${align}`"
    class="vl-breadcrumb"
    aria-label="breadcrumb"
    v-on="$listeners"
  >
    <ol class="vl-breadcrumb--ol">
      <slot />
      <li
        v-for="item in items"
        v-show="!hasSlot"
        :key="item.title"
        :class="{'vl-active':item.active,'disabled-link':item.disabled}"
        :aria-current="item.active ? 'page' : null"
      >
        <a
          v-if="!item.active"
          :href="item.url ? item.url : '#'"
          :title="item.title"
          class="vl-breadcrumb--link"
        >
          {{ item.title }}
        </a>
        <template v-else>
          <span
            :class="textClass"
            :style="textStyle"
            class="vl-breadcrumb--text"
          >
            {{ item.title }}
          </span>
        </template>
        <span
          v-if="!item.active"
          :class="separator.length > 1 ? 'material-icons' : null"
          class="separator notranslate vl-breadcrum--separator"
          translate="no"
          aria-hidden="true"
        >
          {{ separator }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
import _color from '../../utils/color.js'

export default {
  name:'VlBreadcrumb',
  props:{
    items:{
      type:Array
    },
    separator:{
      type:String,
      default:'/'
    },
    color:{
      type:String,
      default: 'primary'
    },
    align:{
      type:String,
      default:'left'
    }
  },
  computed: {
    textClass() {
      const classes = {}
      if (_color.isColor(this.color)) {
        classes[`vl-breadcrumb-text-${this.color}`] = true
      }
      return classes
    },
    textStyle() {
      const style = {}
      if (!_color.isColor(this.color)) {
        style.color = _color.getColor(this.color)
      }
      return style
    },
    hasSlot () {
      return !!this.$slots.default
    }
  }
}
</script>
