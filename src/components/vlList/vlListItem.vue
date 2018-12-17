<template lang="html">
  <div class="vl-list--item">
    <div class="vl-list--avatar">
      <slot name="avatar" />
    </div>
    <div
      v-if="icon"
      class="vl-list--icon"
    >
      <VlIcon
        :icon-pack="iconPack"
        :icon="icon"
      />
    </div>
    <div class="list-titles">
      <div
        v-if="title"
        class="vl-list--title"
      >
        {{ title }}
      </div>
      <div
        v-if="subtitle"
        class="vl-list--subtitle"
      >
        {{ subtitle }}
      </div>
    </div>
    <div class="vl-list--slot">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name:'VlListItem',
  props: {
    vlAvatar:{
      type:[Boolean,String],
      default:false,
    },
    title:{
      type:String,
      default:null,
    },
    subtitle:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null,
    },
    iconPack:{
      type:String,
      default:'material-icons',
    },
  }
}
</script>
