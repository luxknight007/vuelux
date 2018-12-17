<template>
  <td
    ref="td"
    :class="{'td-edit': $slots.edit}"
    class="td vl-table--td"
  >
    <span @click="clicktd">
      <VlIcon
        v-if="$slots.edit"
        class="icon-edit"
      >
        edit
      </VlIcon>
      <slot />
      <span
        v-if="$slots.edit"
        class="empty"
      >
        {{ data ? '' : 'Empty' }}
      </span>
    </span>

    <Transition name="td">
      <div
        v-if="activeEdit"
        class="con-edit-td"
      >
        <slot name="edit" />
        <VlButton
          icon="clear"
          size="small"
          color="primary"
          type="flat"
          @click="close"
        />
      </div>
    </Transition>
  </td>
</template>
<script>
export default {
  name: 'VlTd',
  props:{
    data:{
      default: null
    }
  },
  data: () => ({
    activeEdit: false
  }),
  watch:{
    activeEdit() {
      this.$parent.activeEdit = this.activeEdit
    }
  },
  methods:{
    clicktd () {

      if(this.$slots.edit) {
        if (!this.activeEdit) {
          this.activeEdit = true
          setTimeout(()=>{
            window.addEventListener('click', this.closeEdit)
          },10)
        }
      }
    },
    closeEdit (evt) {
      if (!evt.target.closest('.con-edit-td') && !evt.target.closest('.vl-select--options')) {
        this.close()
      }
    },
    close(){
      this.activeEdit = false
      window.removeEventListener('click', this.closeEdit)
    },
    saveEdit () {
      this.activeEdit = false
    }
  }
}
</script>
