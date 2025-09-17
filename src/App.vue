<template>
  <v-app id="app">
    <loading v-if="loading" />
    <component :is="resolveLayout">
      <router-view />
    </component>
    <Alert />
    <SnackBar />
    <RefreshSnackBar />
  </v-app>
</template>

<script>
import Loading from "./components/default/loading";
import GlobalComputed from "@/helpers/global-computed";
import GlobalMethods from "@/helpers/global-methods";
import Alert from "./components/Alert.vue";
import LayoutBlank from "@/layouts/Blank.vue";
import LayoutContent from "@/layouts/Content.vue";
import SnackBar from "./components/SnackBar.vue";
import RefreshSnackBar from "./components/RefreshSnackBar.vue";

export default {
  name: "App",
  components: {
    Loading,
    Alert,
    LayoutBlank,
    LayoutContent,
    SnackBar,
    RefreshSnackBar,
  },
  computed: {
    ...GlobalComputed,
    resolveLayout() {
      if (this.$route.name === null) return null;
      if (this.$route.meta.layout === "blank") return "layout-blank";
      return "layout-content";
    },
  },
  methods: {
    ...GlobalMethods,
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch("SET_LOADING", false);
    }, 1000);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;700&family=Poppins:wght@200;300;400;500;600&display=swap");

/* Base Layout Fixes */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.v-application,
.v-main {
  min-height: 100vh;
  font-family: "Poppins", "Cairo" !important;
  font-size: 16px !important;
}

/* Fullpage sections */
#fullpage,
.fullpage-section {
  height: 100vh;
  position: relative;
}

/* Mobile fix: prevent half-page layout */
@media (max-width: 768px) {
  #fullpage,
  .fullpage-section {
    height: auto;
    min-height: 100vh;
  }

  .medium-text {
    font-size: 16px;
    line-height: 2rem !important;
  }

  .v-main {
    flex: 1;
    min-height: 100vh;
  }
}

/* Font adjustments */
.heading,
.v-application .headline,
.v-application .title,
.v-application .v-card .v-card__title,
.v-list .v-list-item__title {
  font-family: "Poppins", "Cairo" !important;

  &.v-application--is-rtl {
    div,
    h1,
    h2,
    h3,
    h4,
    p {
      letter-spacing: -0.5px !important;
    }
  }
}

/* Headline adjustments */
.v-application h1.headline {
  font-size: 2.2rem !important;
  line-height: 3.3rem !important;

  @media (max-width: 960px) {
    font-size: 1.9rem !important;
    line-height: 2.5rem !important;
  }
}

/* Scrollbar hidden */
html,
body {
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Fade transitions */
.fade-out-enter,
.fade-out-leave {
  opacity: 1;
}

.fade-out-leave-to {
  opacity: 0;
}

.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 0.4s ease-in-out;
}

/* Gradient helper */
.dark-gradient {
  background-color: #050a19 !important;
  background: linear-gradient(
    125deg,
    rgba(5, 10, 25, 1) 45%,
    rgb(3, 16, 53) 100%
  ) !important;
}

/* Card shadow effects */
.v-card {
  &.card-shadow {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1) !important;
    transition: 0.15s ease-in-out all;

    @media (min-width: 960px) {
      &:hover {
        box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.08) !important;
        transform: translateY(-6px);
      }
    }

    &.v-card--link {
      &:before {
        opacity: 0 !important;
      }

      &:active {
        transform: translateY(1px);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
      }
    }
  }
}

.container {
  &:not(.container--fluid) {
    @media (min-width: 1264px) {
      max-width: 1185px;
    }

    @media (min-width: 1904px) {
      max-width: 1290px;
    }

    @media (max-width: 960px) {
      padding: 16px;
    }
  }
}

/* buttons */
.v-application {
  .v-btn {
    letter-spacing: 0px;
    text-transform: unset;

    &.v-size--large {
      &:not(.v-btn--round) {
        padding: 0 20px;
      }
    }
  }

  &.v-application--is-rtl {
    .v-btn {
      letter-spacing: 0 !important;
    }
  }
}

/* transitions */
.delay-500ms {
  transition-delay: 0.5s !important;
}

.delay-1s {
  transition-delay: 1s !important;
}

.delay-2s {
  transition-delay: 2s !important;
}

.delay-3s {
  transition-delay: 3s !important;
}

.delay-4s {
  transition-delay: 4s !important;
}

.fade-up-off {
  opacity: 0;
  transform: translateY(200px);
}

.fade-up-on {
  opacity: 1;
  transform: none;
  transition: opacity 1s ease-in, transform 0.5s ease-out;
}
</style>
