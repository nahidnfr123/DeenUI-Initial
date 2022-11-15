<script setup lang="ts">
interface _props {
  justify?: string;
  align?: string;
  dense?: boolean;
  noGutter?: boolean;
}
const props = defineProps<_props>()

let classes = ''
classes += (props.justify ? 'justify-' + props.justify + ' ' : '')
classes += (props.align ? 'align-' + props.align + ' ' : '')
classes += (props.dense ? 'dense ' : '')
classes += (props.noGutter ? 'no-gutter ' : '')
</script>

<template>
  <div
      class="d-row"
      :class="classes"
  >
    <slot></slot>
  </div>
</template>
