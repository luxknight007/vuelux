<template>
  <div
    :class="{'vl-sidebar-item-active':getActive}"
    class="vl-sidebar--item"
    @click="setIndexActive"
  >
    <RouterLink
      v-if="to"
      :to="to"
    >
      <VlIcon
        :icon-pack="iconPack"
        :icon="icon"
      />
      <slot />
    </RouterLink>
    <a
      v-else
      :href="href"
    >
      <VlIcon
        :icon-pack="iconPack"
        :icon="icon"
      />
      <slot />
    </a>
  </div>
</template>
<script>
export default {
  name:'VlSidebarItem',
  props:{
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    href: {
      default:'#',
      type: String
    },
    to: {
      default:null,
      type: String
    },
    index: {
      default: null,
      type: [String, Number]
    },
  },
  computed:{
    getActive () {
      return this.$parent.getActive() == this.index
    }
  },
  methods:{
    setIndexActive () {
      this.$parent.setIndexActive(this.index)
      this.$emit('click')
    }
  }
}
</script>
