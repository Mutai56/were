<template>
  <v-main class="layout-content">
    <v-container fluid class="pa-0 layout-container">
      <slot />
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "LayoutContent",
};
</script>

<style scoped>
.layout-content {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto; /* grow and fill viewport */
  min-height: 100vh;
}

.layout-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .layout-content,
  .layout-container {
    min-height: 100vh;
    height: auto;
  }
}
</style>
