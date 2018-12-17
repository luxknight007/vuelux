<template>
  <li class="vl-nav-item">
    <div class="vl-nav-item-slot">
      <slot />
    </div>
    <ul class="vl-nav-submenu">
      <slot name="submenu" />
    </ul>
  </li>
</template>
<script>
export default {
  name:'VlNavbarGroup',
}
</script>
