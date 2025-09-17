<template>
  <div>
    <v-avatar rounded="0">
      <v-img
        :src="$parent.$options.name != 'e-footer' ? '/img/logo-transparent.png' : '/img/logo.jpeg'"
        alt="Logo"
        class="mr-2 mt-n2"
      ></v-img>
    </v-avatar>
    <span
      :class="light ? 'logo text-h5 primary--text' : ($parent.$options.name != 'e-footer' ? 'logo text-h5 secondary--text' : 'logo text-h5 white--text')"
      transition="none"
      :width="width"
      height="auto"
      contain
      @click="navigate"
      >Purpose Centre</span
    >
  </div>
</template>

<script>
import GlobalComputed from "@/helpers/global-computed";
import GlobalMethods from "@/helpers/global-methods";

export default {
  name: "logo",
  props: {
    width: {
      default: 150,
    },
    light: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },
  computed: {
    ...GlobalComputed,
  },
  methods: {
    navigate() {
      if (this.$route.name === "home") {
        if (document.documentElement.scrollTop > 50) {
          this.scrollToTop();
        }
      } else {
        this.$router.push({ name: "home" });
      }
    },

    ...GlobalMethods,
  },
};
</script>
<style lang="scss" scoped>
.logo {
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:active {
    opacity: 0.7;
  }
}
</style>