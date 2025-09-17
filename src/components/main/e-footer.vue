<i18n>
{
  "en": {
    "copyrights": "Purpose Centre - All rights reserved.",
    "description": "Purpose Centre is a Christian based coaching organization, whose main objective is to support individual and organization development by nurturing a culture of psychological wellbeing for individuals, leaders, and institution development.",
    "created-by": "This website was designed, coded and developed by Gilbert Were.",
    "links": "Navigation:",

    "contact": {
      "subheader": "contact us via:",
      "whatsapp": "WhatsApp",
      "email": "Email Address",
      "facebook": "Facebook Page",
      "website": "Website",
      "phone": "Phone"
    }
  }
}
</i18n>

<template>
  <footer class="e-footer footer-bg strong-text--text" :class="{ phone: phoneOnly }">
    <v-container data-aos="fade-up" data-aos-duration="600" class="row-container text--text py-10">
      <v-row>
        <!-- Logo & Description -->
        <v-col :cols="pcOnly ? 4 : 12"
               class="pe-lg-12"
               :class="{ 'd-flex text-center justify-center align-center flex-column': phoneOnly }">
          <logo width="160" />
          <div class="footer-content mt-6 mt-lg-10">
            {{ $t("description") }}
          </div>
        </v-col>

        <!-- Links Navigation -->
        <v-col :cols="pcOnly ? 4 : 12" class="px-lg-12" v-if="pcOnly">
          <v-subheader class="text--text">{{ $t("links") }}</v-subheader>
          <v-list color="footer-bg" dark v-if="$route.name != 'founder'">
            <v-list-item v-for="link in links" :key="link.name" large tile text class="ms-2"
                         @click="navigateToLink(link.ref)">
              <v-list-item-title class="strong-text--text">{{ $t(`links.${link.name}`) }}</v-list-item-title>
            </v-list-item>
          </v-list>
          <v-list color="footer-bg" dark v-else>
            <v-list-item v-for="link in founders" :key="link.name" large tile text class="ms-2"
                         @click="navigateToLink(link.ref)">
              <v-list-item-title class="strong-text--text">{{ $t(`founders.${link.name}`) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Contact Section: Visible on All Devices -->
        <v-col :cols="pcOnly ? 4 : 12" class="ps-lg-12">
          <v-subheader class="text--text">{{ $t("contact.subheader") }}</v-subheader>
          <v-list color="footer-bg" dark class="text--text" two-line>
            <v-list-item
  v-for="item in contactItems"
  :key="item.name"
  :target="item.href ? '_blank' : ''"
  :href="item.href ? item.href : item.name === 'email' ? `mailto:${item.value}` : ''"
>

              <v-list-item-icon>
                <v-icon :color="item.color">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle class="mb-2">{{ $t("contact." + item.name) }}</v-list-item-subtitle>
                <v-list-item-title>{{ item.value }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer Watermark -->
    <v-spacer />
    <div class="footer-watermark flex-column">
      <v-container class="text-center py-0">
        <div v-if="pcOnly" style="display: none;" class="details-text text--text mb-3">
          {{ $t("created-by") }}
        </div>
        <div>{{ currentYear }} &copy; {{ $t("copyrights") }}</div>
      </v-container>
    </div>
  </footer>
</template>

<script>
import GlobalComputed from "@/helpers/global-computed";
import GlobalMethods from "@/helpers/global-methods";
import Logo from "./logo";
import links from "@/helpers/links";
import founders from "@/helpers/founders";

export default {
  name: "e-footer",
  props: {
    light: { type: Boolean, default: false },
  },
  components: { Logo },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      links,
      founders,
      contactItems: [
  {
    name: "whatsapp",
    icon: "mdi-whatsapp",
    value: "+254 796 614 853",
    color: "green darken-1",
    href: "https://wa.me/254796614853", // Already correct
  },
  {
    name: "email",
    icon: "mdi-email",
    value: "info@purpose-centre.com",
    color: "white",
    href: "mailto:info@purpose-centre.com", // Add this
  },
  {
    name: "facebook",
    icon: "mdi-facebook",
    value: "@PurposeCentreKe",
    color: "blue darken-1",
    href: "https://www.facebook.com/PurposeCentreKe", // Fix empty href
  },
  {
    name: "phone",
    icon: "mdi-phone",
    value: "+254 796 614 853",
    color: "grey",
    href: "tel:+254796614853", // Already correct
  },
],

    };
  },
  computed: { ...GlobalComputed },
  methods: { ...GlobalMethods },
};
</script>

<style lang="scss" scoped>
.e-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &.phone {
    min-height: auto;
    padding: 2rem 1rem !important;  // <-- add this here
  }

  .row-container {
    width: 100%;
    line-height: 1.9rem;
  }

  .footer-watermark {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.5rem 0;
    line-height: 1.6rem;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
  }
}


  

</style>
