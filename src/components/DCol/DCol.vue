<script setup lang="ts">
import {computed} from 'vue';

interface _props {
  col?: string | number;
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  xxl?: string | number;
}

const props: { [key: string]: any } = defineProps<_props>()

const classes = computed(() => {
  let cols = ''
  for (let colPropsKey in props) {
    if (colPropsKey === 'col') cols += 'd-col-' + props[colPropsKey] + ' '
    else cols += 'd-col-' + colPropsKey + '-' + props[colPropsKey] + ' '
  }
  return cols
})
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
