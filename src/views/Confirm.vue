<i18n>
{
  "en": {
    "sections": {
        "1": {
          "title": "Purpose Centre",
          "subtitle": "The goal of Purpose Centre is to produce holistic individuals with competencies, values, knowledge, and skills necessary to succeed in a highly competitive world through the Competency Based Curriculum (CBC)."
        },
        "about": {
          "title": "About Us",
          "subtitle": "Who we are and What are our goals",
          "row1": {
            "title": "Who we are, What we do, and What are our goals?",
            "content": "Purpose Centre is a premier learning institution in Kenya offering various courses based on the newly introduced Competency Based Curriculum (CBC). The CBC aims to be a more student-based system, with more focus on the ability of the student to self-learn and develop relevant skills requisite for any engagement carried out. This way of thinking is perhaps informed by the opening up of the world, which has been spurred by the internet explosion."
          }
        },
        "gallery": {
          "title": "Gallery",
          "subtitle": "Take a look at our Portfolio",
          "book": "Book Now"
        },
        "courses": {
          "title": "Our Courses",
          "subtitle": "Courses offered by Purpose Centre"
        },
        "packages": {
          "title": "Packages we Have",
          "subtitle": "Packages we are currently offering to students and teachers for CBC training",
          "book": "Book Venue",
          "cols": [
            {
              "headline": "Physical Activities",
              "description": "Involves training students and teachers on various physical activities",
              "pricing": [
                {
                  "id": 1,
                  "title": "Games - Kshs. 500 Per Person"
                },
                {
                  "id": 2,
                  "title": "Meals - Kshs. 300 Per Person"
                }
              ] 
            },
            {
              "headline": "CBC Practical, Project Central & CBC Farm",
              "description": "Includes educational pack where students and teachers are trained on the academic aspects of CBC",
              "pricing": [
                {
                  "id": 1,
                  "title": "CBC Practical Center - Kshs. 500 Per Person"
                },
                {
                  "id": 2,
                  "title": "Meals - Kshs. 300 Per Person"
                }
              ]
            },
            {
              "headline": "CBC Practical Center & Games",
              "description": "Includes both CBC Practicals and Games for both teachers and students",
              "pricing": [
                {
                  "id": 1,
                  "title": "CBC Practical Center + Games - Kshs. 900 Per Person"
                },
                {
                  "id": 2,
                  "title": "Meals - Kshs. 300 Per Person"
                }
              ]
            },
            {
              "headline": "Teachers Training",
              "description": "Includes training teachers on the new CBC curriculum",
              "pricing": [
                {
                  "id": 1,
                  "title": "Teachers Training - Kshs. 1500 Per Teacher"
                },
                {
                  "id": 2,
                  "title": "Including Lunch, Tea, Andazi, Ugali or Rice, Beef Stew, Veges and Water"
                }
              ]
            },
            {
              "headline": "All Inclusive",
              "description": "Includes both physical activities and the educational pack",
              "pricing": [
                {
                  "id": 1,
                  "title": "All Combined - Kshs. 1200 Per Person"
                },
                {
                  "id": 2,
                  "title": "Meals - Kshs. 300 Per Person"
                }
              ]
            }
          ]
        },
        "contact": {
          "subtitle": "Leave us a message and we'll reply as soon as possible"
        },
        "actions": {
          "contact": "Contact Us",
          "about": "More About Us",
          "courses": "Our Courses"
        }
    },
    "contact": {
      "subheader": "or contact us via:",
      "email": "Email Address",
      "facebook": "Facebook Page",
      "website": "Website"
    }
  }
}
</i18n>

<template>
  <div class="page page-sections">
    <v-card>
      <v-card-title class="error--text text-darken-1 align-center">{{
        formTitle
      }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col :cols="pcOnly ? 6 : 12">
                <v-text-field
                  outlined
                  label="Name"
                  placeholder="Name"
                  :rules="rules.required"
                  readonly
                  v-model="editedItem.customer_name"
                />
              </v-col>
              <v-col :cols="pcOnly ? 6 : 12">
                <v-text-field
                  outlined
                  label="Email"
                  placeholder="Email"
                  :rules="emailRules"
                  readonly
                  v-model="editedItem.customer_email"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  outlined
                  label="School Name"
                  placeholder="School Name"
                  :rules="rules.required"
                  readonly
                  v-model="editedItem.school_name"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col :cols="pcOnly ? 6 : 12">
                <v-text-field
                  outlined
                  label="No. of Students"
                  placeholder="No. of Students"
                  type="number"
                  :rules="numberRules"
                  readonly
                  v-model="editedItem.no_of_students"
                />
              </v-col>
              <v-col :cols="pcOnly ? 6 : 12">
                <v-text-field
                  outlined
                  label="No. of Teachers"
                  placeholder="No. of Techers"
                  type="number"
                  :rules="numberRules"
                  readonly
                  v-model="editedItem.no_of_teachers"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col :cols="pcOnly ? 6 : 12">
                <v-text-field
                  outlined
                  label="Grade"
                  placeholder="Grade"
                  type="number"
                  :rules="numberRules"
                  readonly
                  v-model="editedItem.grade"
                />
              </v-col>
              <v-col :cols="pcOnly ? 6 : 12">
                <v-select
                  outlined
                  :items="meals"
                  label="Will Meals Be Provided?"
                  item-value="id"
                  item-text="title"
                  :rules="rules.select"
                  readonly
                  v-model="editedItem.meals"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col :cols="pcOnly ? 6 : 12">
                <v-text-field
                  outlined
                  label="Unit Cost"
                  placeholder="Unit Cost"
                  type="number"
                  readonly
                  v-model="editedItem.unit_cost"
                />
              </v-col>
              <v-col :cols="pcOnly ? 6 : 12">
                <v-text-field
                  v-model="editedItem.booking_date"
                  label="Booking Date"
                  persistent-hint
                  append-icon="mdi-calendar"
                  outlined
                  color="grey"
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-select
                  v-model="editedItem.meals_available"
                  :value="editedItem.meals_available"
                  :items="meals_available"
                  label="Select Required Foods"
                  item-text="title"
                  item-value="id"
                  v-if="editedItem.meals == 2"
                  multiple
                  outlined
                  chips
                  color="grey"
                  item-color="grey"
                  readonly
                >
                  <template v-slot:label>
                    <span class="input__label"
                      >Select Required Foods</span
                    >
                  </template>
                  <template v-slot:prepend-item>
                    <v-list-item ripple @click="toggleMeals">
                      <v-list-item-action>
                        <v-icon
                          :color="
                            editedItem.meals_available.length > 0
                              ? 'error'
                              : ''
                          "
                        >
                          {{ iconMeals }}
                        </v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>
                          Select All
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider class="mt-2"></v-divider>
                  </template>
                  <template v-slot:append-item>
                    <v-divider class="mb-2"></v-divider>
                    <v-list-item disabled>
                      <v-list-item-avatar color="grey lighten-3">
                        <v-icon> mdi-file-outline </v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content
                        v-if="likesAllMeals"
                      >
                        <v-list-item-title>
                          All Meals Selected for This Booking!
                        </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-content
                        v-else-if="likesSomeMeals"
                      >
                        <v-list-item-title>
                          Meals Count
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          {{ editedItem.meals_available.length }}
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-content v-else>
                        <v-list-item-title>
                          Which Meals are Required for this
                          Booking?
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          Go ahead, make a selection above!
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-select
                  outlined
                  :items="paymentOptions"
                  label="Complementary Confimed Booking (Payment Options)"
                  item-value="id"
                  item-text="title"
                  :rules="rules.select"
                  v-model="editedItem.confirmed"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-select
                  outlined
                  :items="packagesCols"
                  label="Booking Package"
                  item-value="id"
                  item-text="headline"
                  :rules="rules.select"
                  v-model="editedItem.package"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  rows="4"
                  no-resize
                  auto-grow
                  outlined
                  label="Will Computers Be Required?"
                  placeholder="Please Enter The Number of Computers Required (Optional)"
                  v-model="editedItem.computers_required"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row v-if="booking.meals == 2">
              <v-col cols="12">
                <v-simple-table>
                  <tbody>
                    <tr>
                      <td>Package Name</td>
                      <td class="font-weight-bold">{{ pricing.package_name }}</td>
                    </tr>
                    <tr>
                      <td>Package Cost</td>
                      <td class="font-weight-bold">{{ toMoneyFormat(pricing.package_cost) }}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>No. of Students</td>
                      <td>{{ pricing.no_of_students }}</td>
                    </tr>
                    <tr>
                      <td>No. of Teachers</td>
                      <td>{{ pricing.no_of_teachers }}</td>
                    </tr>
                    <tr>
                      <td>Total No. of People</td>
                      <td class="font-weight-bold">{{ pricing.no_of_people }}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr v-for="item in selected_foods" :key="item.id">
                      <td>{{ item.title }}</td>
                      <td>{{ item.price }}</td>
                    </tr>
                    <tr>
                      <td>Total Food Cost</td>
                      <td class="font-weight-bold">{{ toMoneyFormat(pricing.food_cost) }}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Total Cost Per Person</td>
                      <td class="font-weight-bold">{{ toMoneyFormat(pricing.person_cost) }}</td>
                    </tr>
                    <tr>
                      <td>Total Cost</td>
                      <td class="font-weight-bold">{{ toMoneyFormat(pricing.unit_cost) }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col cols="12">
                <v-simple-table>
                  <tbody>
                    <tr>
                      <td>Package Name</td>
                      <td class="font-weight-bold">{{ pricing.package_name }}</td>
                    </tr>
                    <tr>
                      <td>Package Cost</td>
                      <td class="font-weight-bold">{{ toMoneyFormat(pricing.package_cost) }}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>No. of Students</td>
                      <td>{{ pricing.no_of_students }}</td>
                    </tr>
                    <tr>
                      <td>No. of Teachers</td>
                      <td>{{ pricing.no_of_teachers }}</td>
                    </tr>
                    <tr>
                      <td>Total No. of People</td>
                      <td class="font-weight-bold">{{ pricing.no_of_people }}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Total Cost Per Person</td>
                      <td class="font-weight-bold">{{ toMoneyFormat(pricing.person_cost) }}</td>
                    </tr>
                    <tr>
                      <td>Total Cost</td>
                      <td class="font-weight-bold">{{ toMoneyFormat(pricing.unit_cost) }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn 
          x-large 
          tile 
          color="error"
          class="text-capitalize mx-1"
          @click="backToBooking"
        >
          <span>Back</span>
          <v-icon class="ms-3">mdi-arrow-left-thick</v-icon>
        </v-btn>
        <v-btn 
          x-large 
          tile 
          color="primary"
          class="text-capitalize mx-1"
          @click="save"
          :loading="submitLoading"
        >
          <span>Submit</span>
          <v-icon class="ms-3">mdi-content-save-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import GlobalComputed from '../helpers/global-computed';
import CalendarService from '../services/calendar.service';
import BookingService from "../services/booking.service";

export default {
  data: (vm) => ({
    date: new Date().toJSON().slice(0, 10),
    landscape: true,
    allowedDates: [],
    editedIndex: -1,
    submitLoading: true,
    dialog: false,
    valid: true,
    bookingDateWatcher: new Date().toISOString().slice(0, 10),
    menu_booking_date: false,
    selected_foods: [],
    pricing: {
      package_name: '',
      package_cost: 0,
      no_of_teachers: '',
      no_of_students: '',
      no_of_people: '',
      food_cost: 0,
      unit_cost: 0,
      person_cost: 0
    },
    meals: [
      {
        id: 1,
        title: 'No'
      },
      {
        id: 2,
        title: 'Yes'
      },
    ],
    meals_available: [
      {
        id: 1,
        title: 'Chips - Kshs. 180 Per Plate',
        price: 180
      },
      {
        id: 2,
        title: 'Sausage - Kshs. 60 Per Plate',
        price: 60
      },
      {
        id: 3,
        title: 'Soda - Kshs. 60 Per Plate',
        price: 60
      },
      {
        id: 4,
        title: 'Milk - Kshs. 60 Per Plate',
        price: 60
      },
      {
        id: 5,
        title: 'Pilau - Kshs. 180 Per Plate',
        price: 180
      },
      {
        id: 6,
        title: 'Chicken - Kshs. 200 Per Plate',
        price: 200
      },
    ],
    paymentOptions: [
      {
        id: 1,
        title: 'Payment will be done on Arrival at Destination'
      },
      {
        id: 2,
        title: 'Payment will be done on Checkout'
      },
    ],
    packagesCols: [
      {
        id: 1,
        color: 'blue', 
        icon: 'mdi-run', 
        headline: vm.$t('sections.packages.cols.0.headline'), 
        description: vm.$t('sections.packages.cols.0.description'),
        pricing: vm.$t('sections.packages.cols.0.pricing'),
        package_cost: 500,
      },
      {
        id: 2,
        color: 'deep-orange', 
        icon: 'mdi-book-education-outline', 
        headline: vm.$t('sections.packages.cols.1.headline'), 
        description: vm.$t('sections.packages.cols.1.description'),
        pricing: vm.$t('sections.packages.cols.1.pricing'),
        package_cost: 500,
      },
      {
        id: 3,
        color: 'red', 
        icon: 'mdi-book-education', 
        headline: vm.$t('sections.packages.cols.2.headline'), 
        description: vm.$t('sections.packages.cols.2.description'),
        pricing: vm.$t('sections.packages.cols.2.pricing'),
        package_cost: 900
      },
      {
        id: 4,
        color: 'purple', 
        icon: 'mdi-human-male-board', 
        headline: vm.$t('sections.packages.cols.3.headline'), 
        description: vm.$t('sections.packages.cols.3.description'),
        pricing: vm.$t('sections.packages.cols.3.pricing'),
        package_cost: 1500
      },
      {
        id: 5,
        color: 'teal', 
        icon: 'mdi-all-inclusive', 
        headline: vm.$t('sections.packages.cols.4.headline'), 
        description: vm.$t('sections.packages.cols.4.description'),
        pricing: vm.$t('sections.packages.cols.4.pricing'),
        package_cost: 1200
      },
    ],
    editedItem: {
      customer_name: '',
      customer_email: '',
      school_name: '',
      no_of_students: '',
      grade: '',
      no_of_teachers: '',
      meals_available: [],
      confirmed: '',
      meals: '',
      unit_cost: '',
      computers_required: '',
      booking_date: vm.formatDate(new Date().toISOString().slice(0, 10)),
      package: ''
    },
    defaultItem: {
      customer_name: '',
      customer_email: '',
      school_name: '',
      no_of_students: '',
      grade: '',
      no_of_teachers: '',
      meals_available: [],
      confirmed: '',
      meals: '',
      unit_cost: '',
      computers_required: '',
      booking_date: vm.formatDate(new Date().toISOString().slice(0, 10)),
      package: ''
    },
    rules: {
      select: [(v) => !!v || "An item should be selected"],
      select2: [(v) => v.length > 0 || "At least one item should be selected"],
      required: [
        (v) => !!v || "Field is required",
        (v) => (v && v.length >= 3) || "Min 3 characters",
      ],
    },
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      (v) => (v && v.length >= 3) || "Min 3 characters",
    ],
    numberRules: [
      (v) => !!v || "Field is required",
      (v) => (v && v.length >= 1) || "Min 1 characters",
    ],
  }),
  computed: {
    ...GlobalComputed,
    // required meal types
    likesAllMeals() {
      return (
        this.editedItem.meals_available.length ===
        this.meals_available.length
      );
    },
    likesSomeMeals() {
      return (
        this.editedItem.meals_available.length > 0 &&
        !this.likesAllMeals
      );
    },
    iconMeals() {
      if (this.likesAllMeals) return "mdi-close-box";
      if (this.likesSomeMeals) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
    booking() {
      return this.$store.state.booking.booking;
    },
    computedBookingDate() {
      return this.formatDate(this.editedItem.booking_date);
    },
    formTitle() {
      return this.editedIndex === -1 ? "Confirm Booking" : "Edit Booking";
    },
  },
  watch: {
    bookingDateWatcher() {
      this.editedItem.booking_date = this.formatDate(this.bookingDateWatcher);
    },
  },
  mounted() {
    this.editedItem = this.booking;
    this.index();
    this.getPricing();
  },
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      return this.$refs.form.reset();
    },
    resetValidation() {
      return this.$refs.form.resetValidation();
    },
    toMoneyFormat(number) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
      }).format(number);
    },
    getPricing() {
      var no_of_teachers = parseInt(this.booking.no_of_teachers);
      var no_of_students = parseInt(this.booking.no_of_students);
      var no_of_people = parseInt(no_of_teachers) + parseInt(no_of_students);
      var booking_package = this.booking.package;
      var meals = this.booking.meals;

      this.pricing.no_of_teachers = no_of_teachers;
      this.pricing.no_of_students = no_of_students;
      this.pricing.no_of_people = no_of_people;

      this.packagesCols.find((item) => {
        if(item.id == this.booking.package) {
          this.pricing.package_name = item.headline;
          this.pricing.package_cost = item.package_cost;
        }
      });

      if (meals == 2) {
        this.booking.meals_available.forEach((meal) => {
          this.meals_available.find((item) => {
            if(item.id == meal) {
              this.selected_foods.push(item);
              this.pricing.food_cost += parseInt(item.price);
            }
          });
        });

        if (booking_package == 1 || booking_package == 2) {
          this.pricing.package_cost = 500;
          this.pricing.person_cost = this.pricing.package_cost + this.pricing.food_cost;
          this.pricing.unit_cost = (no_of_people * this.pricing.person_cost);
        }
        
        if (this.editedItem.package == 3) {
          this.pricing.package_cost = 900;
          this.pricing.person_cost = this.pricing.package_cost + this.pricing.food_cost;
          this.pricing.unit_cost = (no_of_people * this.pricing.person_cost);
        }

        if (this.editedItem.package == 4) {
          this.pricing.package_cost = 1500;
          this.pricing.person_cost = this.pricing.package_cost;
          this.pricing.unit_cost = (no_of_people * this.pricing.person_cost);
        }

        if (this.editedItem.package == 5) {
          this.pricing.package_cost = 1200;
          this.pricing.person_cost = this.pricing.package_cost + this.pricing.food_cost;
          this.pricing.unit_cost = (no_of_people * this.pricing.person_cost);
        }
      } else {
        if (booking_package == 1 || booking_package == 2) {
          this.pricing.package_cost = 500;
          this.pricing.person_cost = this.pricing.package_cost;
          this.pricing.unit_cost = (no_of_people * this.pricing.package_cost);
        }
        
        if (this.editedItem.package == 3) {
          this.pricing.package_cost = 900;
          this.pricing.person_cost = this.pricing.package_cost;
          this.pricing.unit_cost = (no_of_people * this.pricing.package_cost);
        }

        if (this.editedItem.package == 4) {
          this.pricing.package_cost = 1500;
          this.pricing.person_cost = this.pricing.package_cost;
          this.pricing.unit_cost = (no_of_people * this.pricing.package_cost);
        }

        if (this.editedItem.package == 5) {
          this.pricing.package_cost = 1200;
          this.pricing.person_cost = this.pricing.package_cost;
          this.pricing.unit_cost = (no_of_people * this.pricing.package_cost);
        }
      }
    },
    // required foods
    toggleMeals() {
      this.$nextTick(() => {
        if (this.likesAllMeals) {
          this.editedItem.meals_available = [];
        } else {
          this.editedItem.meals_available = this.meals_available.map((meal) => {
              return meal.id;
          });
        }
      });
    },
    updateValidation() {
      this.$store.dispatch("booking/SET_VALIDATION_ERRORS", []);
      if(this.$refs.form)
        this.resetValidation();
    },
    backToBooking() {
      this.$router.push('/booking');
    },
    goToLandingPage() {
      this.$router.push('/');
    },
    bookDate() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    getAllowedDates (val) {
      if (this.allowedDates.indexOf(val) !== -1) {
        return true
      } else {
        return false
      }
    },
    setDBDateFormat() {
      this.editedItem.booking_date = this.reverseFormatDate(this.editedItem.booking_date);
    },
    revertDBDateFormat() {
      this.editedItem.booking_date = this.formatDate(this.editedItem.booking_date);
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}-${month}-${year}`;
    },
    reverseFormatDate(date) {
      if (!date) return null;
      const [day, month, year] = date.split("-");
      return `${year}-${month}-${day}`;
    },
    index() {
      return CalendarService.getAllAvailableDates().then(
        (response) => {
          if (response.status == 200) {
            this.allowedDates = response.data.data;
            this.submitLoading = false;
          } else {
            this.allowedDates = [];
            console.log(response.data.error);
          }
        },
        (error) => {
          this.allowedDates = [];
          this.submitLoading = false;
          if (error.response.status == 401) {
            this.handleLogout();
          }

          this.$store.dispatch("alert/ERROR", error.response.data.message);
        }
      );
    },
    save() {
      this.valid = this.validate();
      if (this.valid) {
        var userConfirmation = confirm("Are you sure you want to submit this booking?");
        if (userConfirmation) {
          this.submitLoading = true;
          this.setDBDateFormat();

          if (this.editedIndex > -1) {
            if (typeof this.editedItem.confirmed != "number") {
              this.editedItem.confirmed = this.editedItem.confirmed.id;
            }

            if (typeof this.editedItem.meals != "number") {
              this.editedItem.meals = this.editedItem.meals.id;
            }

            BookingService.update(this.editedItem).then(
              (response) => {
                if (response.status == 200) {
                  this.$store.dispatch("alert/SUCCESS", response.data.message);
                  this.submitLoading = false;
                  this.revertDBDateFormat();
                  this.goToLandingPage();
                } else {
                  this.$store.dispatch("alert/ERROR", "Invalid data, please check the form and try again!");
                  this.submitLoading = false;
                  this.revertDBDateFormat();
                }
              },
              (error) => {
                this.submitLoading = false;
                this.revertDBDateFormat();
                if (error.response.status == 422) {
                  this.$store.dispatch("alert/ERROR", error.response.data.message);
                }

                this.$store.dispatch("alert/ERROR", error.response.data.message);
              }
            );
          } else {
            BookingService.store(this.editedItem).then(
              (response) => {
                if (response.status == 200) {
                  this.$store.dispatch("alert/SUCCESS", "Booking Submitted Successfully");
                  this.submitLoading = false;
                  this.revertDBDateFormat();
                  this.goToLandingPage();
                } else {
                  this.$store.dispatch("alert/ERROR",response.response.statusText || "Internal error!");
                  this.submitLoading = false;
                  this.revertDBDateFormat();
                }
              },
              (error) => {
                this.submitLoading = false;
                this.revertDBDateFormat();
                console.log(error);
                if (error.response.status == 422) {
                  this.$store.dispatch("alert/ERROR", error);
                }
                this.$store.dispatch("alert/ERROR", error.response.data.message);
              }
            );
          }
        }
      }
    },
  },
}
</script>