import DefaultLayout from "~/layouts/Default.vue";

import Vue from "vue";
import App from "./App.vue";

import BootstrapVue from "bootstrap-vue";
import "./assets/styles/main.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Scrollspy from "vue2-scrollspy";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faMobileAlt,
  faAtom,
  faPalette,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import checkIfMobile from "./mixins/checkIfMobile";

export default function(Vue, { router, head, isClient }) {
  new Vue({
    created() {
      AOS.init({ disable: "phone" });
    },
    router,
    render: (h) => h(App),
  }).$mount("#app");

  Vue.use(BootstrapVue);
  Vue.use(Scrollspy);
  Vue.component("Layout", DefaultLayout);
  Vue.mixin(checkIfMobile);

  library.add(
    faLinkedin,
    faGithub,
    faEnvelope,
    faMobileAlt,
    faAtom,
    faPalette,
    faGraduationCap,
    faClock,
    faBriefcase
  );
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  Vue.config.productionTip = false;
}
