<script setup lang="ts">
import {ref, inject} from 'vue';

const props = defineProps<{
  rounded?: boolean;
}>()
</script>

<template>
  <div class="d-input-field">
    <label for="input">Input</label>
    <div class="d-input-wrapper">
      <input type="text" class="d-input" id="input">
    </div>
    <div class="d-input-details error">Please fill in the fields.</div>
  </div>
</template>
