<i18n>
{
  "en": {
    "sections": {
        "about": {
          "title": "Meet Our Founder",
          "subtitle": "About the CEO Founder",
          "row1": {
            "title": "Lydiah Oyiemba Were",
            "content": "Lydiah is a HR profesional with more than 20 years’ of experience in HR management with International NGO Africa both locally and internationally, as well as the Government sector. I have strength in both technical and strategic HR activities; HR policy and infrastructure, organization effectiveness and change management. I possess proven ability to build internal and external networks, institutional partnership on a technical stand."
          },
          "row2": {
            "title": "Education",
            "content": "My Education"
          }
        },
        "achievements": {
          "title": "Selected Achievements",
          "subtitle": "Take a look at some of my Work",
          "book": "Book Now"
        },
        "videos": {
          "title": "Videos",
          "subtitle": "Take a look at one of our YouTube Videos"
        },
        "areas": {
          "title": "My Areas of Expertise",
          "subtitle": "Key Areas of Expertise",
          "founder": "Our Founder"
        },
        "contact": {
          "subtitle": "Leave us a message and we'll reply as soon as possible"
        },
        "actions": {
          "contact": "Contact Us",
          "about": "More About Us",
          "areas": "Our Core Values"
        }
    },
    "contact": {
      "subheader": "or contact us via:",
      "email": "Email Address",
      "facebook": "Facebook Page",
      "website": "Website",
      "phone": "Phone"
    },
    "map": {
      "title": "Our Location",
      "subtitle": "Feel Free To Pay Us A Visit"
    }
  }
}
</i18n>

<template>
  <div class="page page-sections mt-10">
    <e-section
      id="aboutSection"
      data-section="about"
      :headline="$t('sections.about.title')"
      :subtitle="$t('sections.about.subtitle')"
      light
      divider
    >
      <v-row class="flex-wrap justify-center pa-5 mb-5">
        <h1 class="headline">{{ $t("sections.about.row1.title") }}</h1>
        <p
          class="medium-text text-light--text mt-6 mt-lg-8"
          :class="{ 'text-center': phoneOnly }"
        >
          {{ $t("sections.about.row1.content") }}
        </p>
      </v-row>

      <v-row>
        <v-col
          :data-aos="pcOnly ? (isRtl ? 'fade-left' : 'fade-right') : 'fade-up'"
          data-aos-duration="800"
          :cols="pcOnly ? 5 : 12"
          class=""
        >
          <v-img
            src="/img/lydiah.jpeg"
            contain
            width="100%"
            max-height="550"
          ></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          :data-aos="pcOnly ? (isRtl ? 'fade-right' : 'fade-left') : 'fade-up'"
          data-aos-duration="800"
          class="mt-6 mt-lg-0"
          :cols="pcOnly ? 6 : 12"
        >
          <h1 class="headline ml-3">{{ $t("sections.about.row2.title") }}</h1>
          <v-list
            subheader
            two-line
            style="background-color: transparent;"
          >
            <v-list-item-group
              v-model="selected"
              active-class="pink--text"
              multiple
            >
              <div
                v-for="(item, index) in education"
                :key="index"
                class="bg-red"
              >
                <v-list-item
                  :value="item.title"
                >
                  <v-list-item-avatar>
                    <v-icon
                      class="black lighten-1"
                      dark
                    >
                      mdi-book-education-outline
                    </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-wrap primary--text">
                      {{ item.year }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-wrap secondary--text">
                      {{ item.title }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider
                  v-if="index < education.length - 1"
                  :key="index"
                ></v-divider>
              </div>
            </v-list-item-group>
          </v-list>
          <div class="actions">
            <v-btn
              @click="navigateToLink('#expertiseSection')"
              tile
              large
              depressed
              color="primary"
              >{{ $t("sections.areas.title") }}</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </e-section>

    <e-section
      id="expertiseSection"
      data-section="areas"
      background="light"
      :headline="$t('sections.areas.title')"
      :subtitle="$t('sections.areas.subtitle')"
      light
    >
      <v-row class="flex-wrap justify-center">
        <v-col
          v-for="(value, i) in areas"
          :key="i"
          :cols="pcOnly ? 3 : 12"
        >
          <v-card
            v-ripple="value.href ? { class: 'soft-ripple' } : false"
            data-aos="fade-up"
            :data-aos-duration="800"
            :data-aos-delay="400 * i"
            class="card-shadow fill-height text-center"
            :href="value.href ? value.href : ''"
            :target="value.href ? '_blank' : ''"
          >
            <div class="py-1 px-3">
              <v-card-title class="primary--text mb-1 justify-center">
                <div class="col-content">
                  <div
                    v-if="value.icon"
                    class="col-icon"
                  >
                    <v-icon :color="value.color + ' darken-1'" x-large>{{
                      value.icon
                    }}</v-icon>
                  </div>
                  <slot v-else :name="'icon' + i"></slot>

                  <br>
                  
                  <div>
                    <h3
                      v-if="value.title"
                      class="col-headline headline text--darken-2 text-wrap"
                      :class="`${value.color}--text`"
                    >
                      {{ value.title }}
                    </h3>
                    <slot v-else :name="'headline' + i"></slot>
                  </div>
                </div>
              </v-card-title>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </e-section>

    <e-section
      id="achievementsSection"
      data-section="achievements"
      :headline="$t('sections.achievements.title')"
      :subtitle="$t('sections.achievements.subtitle')"
      light
      divider
    >
      <v-row>
        <v-col
          :data-aos="pcOnly ? (isRtl ? 'fade-right' : 'fade-left') : 'fade-up'"
          data-aos-duration="800"
          cols="12"
        >
          <template>
            <v-carousel 
              cycle
            >
              <v-carousel-item
                v-for="(item, i) in achievements"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition"
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-sheet
                  :color="item.color"
                  height="100%"
                >
                  <div class="d-flex fill-height justify-center align-center pa-10">
                    <div class="text-h2 white--text pa-10">
                      {{ item.title }}
                    </div>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </template>
        </v-col>
      </v-row>
    </e-section>

    <e-section
      id="contactSection"
      data-section="contact"
      :headline="$t('links.contact')"
      :subtitle="$t('sections.contact.subtitle')"
      light
    >
      <v-row class="justify-center px-lg-12">
        <v-col :cols="pcOnly ? 6 : 12" class="ps-lg-12">
          <contact-form data-once :data-aos="'fade'" :data-aos-duration="800" />
        </v-col>
        <v-col v-if="pcOnly" cols="1" class="text-center">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col :cols="pcOnly ? 3 : 12">
          <div :data-aos="'fade'" :data-aos-duration="800">
            <v-subheader>
              {{ $t("contact.subheader") }}
            </v-subheader>
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
// @ is an alias to /src
import "particles.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ScrollToTop from "@/components/custom/scroll-to-top";
import ContactForm from "@/components/custom/contact-form";
import ESection from "@/components/default/e-section";
import EFooter from "@/components/main/e-footer";
import GlobalComputed from "@/helpers/global-computed";
import GlobalMethods from "@/helpers/global-methods";

export default {
  name: "Founder",
  components: {
    ScrollToTop,
    ContactForm,
    ESection,
    EFooter,
  },
  data() {
    return {
      showSection1Actions: false,
      currentScrollTop: 0,
      videoId: "",

      selected: [],
      education: [
        {
          id: 1,
          title: 'Ongoing PhD Clinical Psychology Daystar University',
          year: '2018',
        },
        {
          id: 2,
          title: 'Master of Business Administration MBA (HR) Moi University',
          year: '2008 - 2009',
        },
        {
          id: 3,
          title: 'Master of Arts MA (Counselling Psychology) Daystar University',
          year: '2011 - 2012',
        },
        {
          id: 4,
          title: 'Higher Diploma HRM (Kenya Polytechnic)',
          year: '2005 - 2006',
        },
        {
          id: 5,
          title: 'Diploma Human Resource',
          year: '2001 - 2002',
        },
        {
          id: 6,
          title: 'Secretarial and computer studies',
          year: '1995 - 1996',
        },
      ],

      achievements: [
        {
          id: 1,
          title: 'Successful International project startups and close out projects start up within Africa',
          color: 'primary',
        },
        {
          id: 2,
          title: 'Effective Client internal and external RTI HR Client and stakeholders management',
          color: 'secondary',
        },
        {
          id: 3,
          title: 'Successful support to performance improvement for senior project staff in Africa',
          color: 'info darken-2',
        },
        {
          id: 4,
          title: 'HR strategic partner and advisory role to the Emergency Response team Ebola Treatment Unit project',
          color: 'accent',
        },
        {
          id: 5,
          title: 'IRC Liberia - developed and managed partnerships with stakeholder, Government and other NGOs',
          color: 'warning',
        },
        {
          id: 6,
          title: 'RTI International streamline proposal recruitment process by reducing turn- around time',
          color: 'secondary',
        },
        {
          id: 7,
          title: 'Managed Country-Wide Operations for SOS children Villages Kenya resulting in increased country office coordination, internal and external communication and team cohesiveness',
          color: 'error',
        },
        {
          id: 8,
          title: 'Secretary to the Nairobi County Government Rapid results initiative on performance management, Staff occupational health and safety and substance abuse programs',
          color: 'black',
        },
        {
          id: 9,
          title: 'Aligning organization culture and HR and OD processes to reposition SOS brand and services resulting into a successful rebranding program for internal clients (staff)',
          color: 'success',
        },
      ],

      contactItems: [
        {
          name: "email",
          icon: "mdi-email",
          value: "info@purpose-centre.com",
          color: "secondary",
        },
        {
          name: "facebook",
          icon: "mdi-facebook",
          value: "@PurposeCentreKe",
          color: "blue darken-1",
          href: "",
        },
        {
          name: "phone",
          icon: "mdi-phone",
          value: "+254 796 614 853",
          color: "grey",
          href: "tel:+254796614853",
        },
      ],

      areas: [
        {
          color: 'accent', 
          icon: 'mdi-strategy',
          title: "HR Strategy Communication & Implementation",
        },
        {
          color: 'secondary', 
          icon: 'mdi-briefcase-arrow-up-down',
          title: "Change Management Strategy & Implementation",
        },
        {
          color: 'primary', 
          icon: 'mdi-handshake-outline',
          title: "Partnerships & Networks Development",
        },
        {
          color: 'success', 
          icon: 'mdi-account-check-outline',
          title: "Talent Management & Succession Planning Management",
        },
        {
          color: 'info', 
          icon: 'mdi-presentation',
          title: "Presentation / Group Facilitation Skills",
        },
        {
          color: 'warning', 
          icon: 'mdi-domain',
          title: "USAID Rules and Regulations",
        },
        {
          color: 'danger', 
          icon: 'mdi-human-male-board-poll',
          title: "Human Resource Management",
        },
        {
          color: 'error', 
          icon: 'mdi-human-greeting-proximity',
          title: "Mentorship",
        },
      ],
    };
  },
  computed: {
    ...GlobalComputed,
  },
  methods: {
    goToFounderPage() {
      this.$router.replace('/our-founder')
    },

    scrollToSection(n) {
      let i = n - 1,
        element = document.querySelectorAll(".page-sections section")[i];
      if (element) {
        this.scrollToElement(element);
      }
    },

    openGoogleMap() {
      window.open("https://maps.google.com/maps?q=-1.2287111%2C36.9894515&amp;z=17&amp;hl=en", "_blank"); 
    },

    scrollObserver() {
      window.addEventListener("scroll", () => {
        this.currentScrollTop = document.documentElement.scrollTop;
      });
    },

    handleScrollChange(scrollTop) {
      const sections = document.querySelectorAll(".page-sections section");
      sections.forEach((section) => {
        let offsetTop = section.offsetTop - this.navbarHeight, // decrease navbarHeight
          offsetBottom = offsetTop + section.offsetHeight;

        if (scrollTop >= offsetTop && scrollTop < offsetBottom) {
          let sectionName = section.getAttribute("data-section");
          if (sectionName) {
            this.$store.commit("SET_ACTIVE_SECTION", sectionName);
          }
          // section is visible...
          if (section.getAttribute("data-theme") === "light") {
            if (!this.lightNavbar) {
              this.$store.dispatch("SET_LIGHT_NAVBAR", true);
            }
          } else {
            if (this.lightNavbar) {
              this.$store.dispatch("SET_LIGHT_NAVBAR", false);
            }
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
section {
  .container {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    &,
    * {
      z-index: 1;
    }
  }

  &.header-section {
    color: white;
  }

  h1 {
    font-size: 4rem;
    font-weight: 300;

    @media (max-width: 960px) {
      text-align: center;
      font-size: 1.7rem;
      line-height: 2.4rem;
      font-weight: 400;
    }
  }

  h2 {
    font-size: 2.75rem;
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