<template>
  <tbody
    :class="[`tr-table-state-${state}`, {'is-selected':isSelected, 'selected': data, 'is-expand': maxHeight != '0px', 'activeEdit': activeEdit, 'hoverFlat': $parent.hoverFlat}]"
    class="tr-table"
    @click="clicktr"
  >
    <tr
      v-if="!$parent.notSpacer"
      class="tr-spacer"
    />
    <tr class="tr-values vl-table--tr">
      <td
        class="td-check"
        @click="clicktd()"
      >
        <VlCheckbox
          v-if="$parent.multiple"
          :checked="isSelected"
          size="small"
        />

        <VlIcon v-if="$slots.expand">
          keyboard_arrow_down
        </VlIcon>
      </td>
      <slot />
    </tr>
    <tr
      v-if="$slots.expand"
      class="tr-expand"
    >
      <td
        ref="td"
        :colspan="colspan"
      >
        <div
          :style="styleExpand"
          class="con-expand"
        >
          <slot name="expand" />
        </div>
      </td>
    </tr>
  </tbody>
</template>
<script>
export default {
  name: 'VlTr',
  props:{
    state:{
      type:String,
      default: null
    },
    data: {
      default: null
    },
  },
  data:()=>({
    colspan:0,
    expanded: false,
    maxHeight:'0px',
    activeEdit: false
  }),
  computed:{
    styleExpand () {
      return {
        maxHeight: this.maxHeight
      }
    },
    getColspanExpand () {
      let lengthx = this.$parent.$refs.colgroup.querySelectorAll('th').length
      return lengthx
    },
    isSelected(){
      if(this.$parent.multiple && this.$parent.value) {
        return this.data ? this.$parent.value.includes(this.data) : false
      } else {
        return this.data ? this.$parent.value == this.data : false
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.colspan = this.$parent.$refs.thead.querySelectorAll('th').length
      if (this.$slots.expand) {
        this.colspan ++
      }
    })
  },
  methods:{
    clicktr () {
      this.$parent.clicktr(this.data, true)
    },
    clicktd () {
      this.$parent.clicktr(this.data, false)

      if(this.$parent.multiple) {
        return
      }
      let scrollHeight = this.$refs.td.scrollHeight
      if(this.maxHeight == '0px') {
        this.maxHeight = `${scrollHeight}px`
        setTimeout(() => {
          this.maxHeight = 'none'
        },300)
      } else {
        this.maxHeight = `${scrollHeight}px`
        setTimeout(() => {
          this.maxHeight = `${0}px`
        }, 50)
      }
    }
  }
}
</script>
