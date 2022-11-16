<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <d-container>
    <header>
      <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/forms">Forms</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView/>
  </d-container>
</template>

<style scoped>
</style>
