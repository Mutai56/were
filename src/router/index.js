import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Booking from "../views/Booking.vue";
import Confirm from "../views/Confirm.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import AccountSettings from "../views/account-settings/AccountSettings.vue";
import Bookings from "../views/Bookings.vue";
import Founder from "../views/Founder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { layout: 'blank' },
  },
  {
    path: "/our-founder",
    name: "founder",
    component: Founder,
    meta: { layout: 'blank' },
  },
  {
    path: "/booking",
    name: "booking",
    component: Booking,
    meta: { layout: 'blank' },
  },
  {
    path: "/booking/:id",
    name: "booking-detail", // renamed to avoid duplicate names
    component: Booking,
    props: true,
    meta: { layout: 'blank' },
  },
  {
    path: "/confirm",
    name: "confirm",
    component: Confirm,
    meta: { layout: 'blank' },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { layout: 'blank' },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { layout: 'blank' },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/bookings",
    name: "bookings",
    component: Bookings,
  },
  {
    path: "/account-settings",
    name: "account-settings",
    component: AccountSettings,
  },
];

const router = new VueRouter({
  mode: 'hash',   // <-- this is important for GH Pages
  base: '/',
  routes
});

// Auth guard
router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login', '/register', '/booking', '/confirm', '/our-founder'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    next({ path: '/login' });
  } else {
    next();
  }
});

export default router;
