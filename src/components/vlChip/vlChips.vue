<template lang="html">
  <div class="">
    <div
      :class="{'no-items':value.length==0}"
      class="con-chips"
    >
      <slot />

      <input
        :placeholder="value.length>0?null:placeholder"
        v-model="newChip"
        type="text"
        class="con-chips--input"
        @keypress.enter="addItem"
      >
      <div
        class="x-global con-chips--remove-all"
        @click="removeTotalItems"
      >
        <VlIcon
          :icon-pack="iconPack"
          :icon="removeIcon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'VlChips',
  components:{
  },
  props:{
    value:{},
    vlColor:{
      type:String,
      default:'primary',
    },
    placeholder:{
      type:String,
      default:'',
    },
    items:{
      type:Array,
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    removeIcon:{
      type:String,
      default:'close',
    },
  },
  data(){
    return {
      newChip:'',
      chip1:true,
      itemsx:this.items
    }
  },
  methods:{
    addItem(){
      // this.itemsx.push(this.newChip)
      let valueOld = this.value ? this.value : []
      valueOld.push(this.newChip)
      this.$emit('input', valueOld)
      this.newChip = ''
    },
    removeTotalItems(){
      let valueOld = this.value ? this.value : []
      valueOld.splice(0, this.value.length);
      this.$emit('input', valueOld)
    }
  }
}
</script>
