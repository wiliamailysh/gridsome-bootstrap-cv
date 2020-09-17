import DefaultLayout from "~/layouts/Default.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/styles/main.scss";
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
import breakpoint from "better-vue-breakpoints";

export default function (Vue, { router, head, isClient }) {
  // Font-awesome
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  Vue.config.productionTip = false;

  Vue.use(BootstrapVue);
  Vue.use(Scrollspy);
  Vue.use(breakpoint);
  Vue.component("Layout", DefaultLayout);

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
}
