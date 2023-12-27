<script lang="ts" setup>
const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})

const iconName = computed(() => `#icon-${props.icon}`)

</script>
<template>
  <div class="icon">
    <svg class="svg-icon" :class="className" aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>
  </div>
</template>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
