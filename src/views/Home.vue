<i18n>
{
  "en": {
    "sections": {
      "1": {
        "title": "Purpose Centre",
        "subtitle": "Purpose Centre is a Christian based coaching organization, whose main objective is to support individual and organization development by nurturing a culture of psychological wellbeing for individuals, leaders, and institution development."
      },
      "about": {
        "title": "About Us",
        "subtitle": "Who we are and What are our goals",
        "row1": {
          "title": "Who we are, What we do, and What are our goals?",
          "content": "The Purpose Coaching Center was founded and registered in Kenya in 2019 by Lydiah Were. Our focus is on personal coaching and leadership training by nurturing a high culture of accountability. Purpose Coaching Centre assists young leaders in psychological wellness programs with further follow up on workplace principles on organizational development."
        },
        "row2": {
          "title": "Vision",
          "content": "To be a global leader for increased performance, self-actualization, achievement and well-being in individuals, teams, and organizations by utilizing evidence-based methods grounded in scientific research."
        },
        "row3": {
          "title": "Mission",
          "content": "Simplify mindful wellbeing for individuals with focus to productive contribution to their life, community and organizations."
        }
      },
      "gallery": {
        "title": "Gallery",
        "subtitle": "Take a look at our Portfolio",
        "book": "Book Now"
      },
      "videos": {
        "title": "Videos",
        "subtitle": "Take a look at one of our YouTube Videos"
      },
      "values": {
        "title": "Our Core Values",
        "subtitle": "Core Values of Purpose Coaching Centre",
        "founder": "About Our Founder"
      },
      "contact": {
        "subtitle": "Leave us a message and we'll reply as soon as possible"
      },
      "actions": {
        "contact": "Contact Us",
        "about": "More About Us",
        "values": "Our Core Values"
      }
    },
    "contact": {
      "subheader": "or contact us via:",
      "email": "Email Address",
      "facebook": "Facebook Page",
      "website": "Website",
      "phone": "Phone",
      "whatsapp": "WhatsApp"
    },
    "map": {
      "title": "Our Location",
      "subtitle": "Feel Free To Pay Us A Visit"
    }
  }
}
</i18n>

<template>
  <div class="page page-sections">
    <!-- Header Section -->
    <section id="headerSection" data-section="home" class="header-section dark-gradient fullpage-section">
      <animated-background />
      <v-container v-if="!loading" class="fill-height pt-12" :class="{ 'align-center': phoneOnly }">
        <v-slide-y-transition appear>
          <h1 class="landing-title">
            <animate-text :duration="1500" :stop-after="0" :delay="500" :text="$t('sections.1.title')" />
          </h1>
        </v-slide-y-transition>
        <v-slide-x-transition appear>
          <h2 class="text--text mt-5">
            <animate-text @done="showSection1Actions = true" :duration="2500" :delay="2000" :text="$t('sections.1.subtitle')" />
          </h2>
        </v-slide-x-transition>
        <div class="actions" :class="{ 'fade-up-off': !showSection1Actions, 'fade-up-on': showSection1Actions }">
          <v-btn @click="navigateToLink('#aboutSection')" color="strong-text" tile :large="pcOnly" depressed outlined class="me-6">
            {{ $t("sections.actions.about") }}
          </v-btn>
          <v-btn @click="navigateToLink('#contactSection')" color="secondary" tile :large="pcOnly" outlined>
            {{ $t("sections.actions.contact") }}
          </v-btn>
        </div>
      </v-container>
      <div class="section-scroll-icon">
        <scroll-icon @click="scrollToSection(2)" />
      </div>
    </section>

    <!-- About Section -->
    <e-section id="aboutSection" data-section="about" :headline="$t('sections.about.title')" :subtitle="$t('sections.about.subtitle')" light divider>
      <v-row class="flex-wrap justify-center pa-5 mb-5">
        <h1 class="headline">{{ $t("sections.about.row1.title") }}</h1>
        <p class="medium-text text-light--text mt-6 mt-lg-8" :class="{ 'text-center': phoneOnly }">
          {{ $t("sections.about.row1.content") }}
        </p>
      </v-row>
      <v-row>
        <v-col :data-aos="pcOnly ? (isRtl ? 'fade-left' : 'fade-right') : 'fade-up'" data-aos-duration="800" :cols="pcOnly ? 5 : 12">
          <v-img src="/img/about-us.jpeg" contain width="100%" max-height="550"></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col :data-aos="pcOnly ? (isRtl ? 'fade-right' : 'fade-left') : 'fade-up'" data-aos-duration="800" class="mt-6 mt-lg-0" :cols="pcOnly ? 6 : 12">
          <h1 class="headline">{{ $t("sections.about.row2.title") }}</h1>
          <p class="medium-text text-light--text mt-6 mt-lg-8" :class="{ 'text-center': phoneOnly }">
            {{ $t("sections.about.row2.content") }}
          </p>
          <h1 class="headline">{{ $t("sections.about.row3.title") }}</h1>
          <p class="medium-text text-light--text mt-6 mt-lg-8" :class="{ 'text-center': phoneOnly }">
            {{ $t("sections.about.row3.content") }}
          </p>
          <div class="actions">
            <v-btn @click="navigateToLink('#valuesSection')" tile large depressed color="primary">
              {{ $t("sections.values.title") }}
            </v-btn>
            <v-btn @click="goToFounderPage" tile large depressed color="secondary" class="float-right">
              {{ $t("sections.values.founder") }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </e-section>

    <!-- Videos Section -->
    <e-section id="videosSection" data-section="videos" :headline="$t('sections.videos.title')" :subtitle="$t('sections.videos.subtitle')" light divider>
      <v-row>
        <v-col :cols="12">
          <YouTubeVideo />
        </v-col>
      </v-row>
    </e-section>

    <!-- Contact Section -->
    <e-section id="contactSection" data-section="contact" :headline="$t('sections.actions.contact')" :subtitle="$t('sections.contact.subtitle')" light>
      <v-row class="justify-center px-lg-12">
        <v-col :cols="pcOnly ? 6 : 12" class="ps-lg-12">
          <contact-form data-once :data-aos="'fade'" :data-aos-duration="800" />
        </v-col>
        <v-col v-if="pcOnly" cols="1" class="text-center">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col :cols="pcOnly ? 3 : 12">
          <div :data-aos="'fade'" :data-aos-duration="800">
            <v-subheader>{{ $t("contact.subheader") }}</v-subheader>
            <v-list two-line>
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
                  <v-list-item-title class="text-wrap">{{ item.value }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </e-section>

    <e-footer />
    <scroll-to-top />
  </div>
</template>

<script>
import "particles.js";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "@/components/custom/scroll-to-top";
import AnimateText from "@/components/custom/animate-text";
import ScrollIcon from "@/components/custom/scroll-icon";
import ContactForm from "@/components/custom/contact-form";
import AnimatedBackground from "@/components/custom/animated-background";
import ESection from "@/components/default/e-section";
import EFooter from "@/components/main/e-footer";
import GlobalComputed from "@/helpers/global-computed";
import GlobalMethods from "@/helpers/global-methods";
import YouTubeVideo from '../components/YouTubeVideo.vue';

export default {
  name: "Home",
  components: {
    ScrollToTop,
    ContactForm,
    AnimateText,
    ESection,
    ScrollIcon,
    EFooter,
    AnimatedBackground,
    YouTubeVideo
  },
  data() {
    return {
      showSection1Actions: false,
      currentScrollTop: 0,
      images: [
        { src: '/img/gallery/1.jpeg' },
        { src: '/img/gallery/2.jpeg' },
        { src: '/img/gallery/3.jpeg' },
        { src: '/img/gallery/4.jpeg' },
        { src: '/img/gallery/5.jpeg' },
        { src: '/img/gallery/6.jpeg' },
        { src: '/img/gallery/7.jpeg' },
        { src: '/img/gallery/8.jpeg' },
      ],
      contactItems: [
  {
    name: "whatsapp",
    icon: "mdi-whatsapp",
    value: "+254 796 614 853",
    color: "green darken-1",
    href: "https://wa.me/254796614853", // already correct
  },
  {
    name: "email",
    icon: "mdi-email",
    value: "info@purpose-centre.com",
    color: "secondary",
    href: "mailto:info@purpose-centre.com" // add this
  },
  {
    name: "facebook",
    icon: "mdi-facebook",
    value: "@PurposeCentreKe",
    color: "blue darken-1",
    href: "https://www.facebook.com/PurposeCentreKe" // replace empty href
  },
  {
    name: "phone",
    icon: "mdi-phone",
    value: "+254 796 614 853",
    color: "grey",
    href: "tel:+254796614853" // already correct
  },
]

    };
  },
  computed: {
    ...GlobalComputed,
  },
  methods: {
    navigateToLink(selector) {
      const el = document.querySelector(selector);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    goToFounderPage() {
      this.$router.push('/our-founder')
    },
    scrollObserver() {
      window.addEventListener("scroll", () => {
        this.currentScrollTop = document.documentElement.scrollTop;
      });
    },
    handleScrollChange(scrollTop) {
      const sections = document.querySelectorAll(".page-sections section");
      sections.forEach((section) => {
        let offsetTop = section.offsetTop,
          offsetBottom = offsetTop + section.offsetHeight;
        if (scrollTop >= offsetTop && scrollTop < offsetBottom) {
          let sectionName = section.getAttribute("data-section");
          if (sectionName) {
            this.$store.commit("SET_ACTIVE_SECTION", sectionName);
          }
        }
      });
    },
    ...GlobalMethods,
  },
  watch: {
    currentScrollTop(top) {
      this.handleScrollChange(top);
    },
  },
  mounted() {
    localStorage.clear();
    this.scrollObserver();
    AOS.init({
      container: document.documentElement,
      once: true,
      easing: "ease",
    });
  },
};
</script>

<style lang="scss" scoped>
.landing-title {
  color: #FF5733;
  font-size: 5rem;
  font-weight: 700;
  @media (max-width: 960px) {
    font-size: 2rem;
    text-align: center;
  }
}

  section {
  &.header-section {
    color: white;
    min-height: 100vh;          // Make the header fill the viewport
    display: flex;              // Center content
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 2.00rem;
    word-break: break-word !important;
    font-weight: 200;
    @media (max-width: 960px) {
      text-align: center;
      font-size: 1.3rem;
      font-weight: 300;
    }
  }

  .actions {
    margin-top: 3rem;
    @media (max-width: 960px) {
      margin: 2rem 0;
      width: 100%;
      text-align: center;
      justify-content: center;
    }
    .v-btn {
      @media (min-width: 960px) {
        min-width: 130px;
        min-height: 45px;
      }
    }
  }

  .section-scroll-icon {
    z-index: 2;
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
  }
}

</style>
