<template>
  <v-app id="app">
    <v-main class="layout-blank">
      <loading v-if="loading" />
      <Navbar :light-theme="lightNavbar" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Loading from "../components/default/loading";
import Navbar from "../components/main/navbar.vue";
import GlobalComputed from '../helpers/global-computed';

export default {
  name: "LayoutBlank",
  components: {
    Navbar,
    Loading
  },
  computed: {
    ...GlobalComputed
  },
}
</script>

<style scoped>
.layout-blank {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto; /* ensures it grows to fill viewport */
  min-height: 100vh;
}

.v-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .layout-blank,
  .v-main {
    min-height: 100vh;
    height: auto;
  }
}
</style>
