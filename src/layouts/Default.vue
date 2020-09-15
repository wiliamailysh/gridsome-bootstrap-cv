<template>
  <div class="layout">
    <Header />
    <NavbarSocial />
    <slot />
    <Footer />
  </div>
</template>

<script>
import NavbarSocial from "../components/NavbarSocial";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  components: {
    NavbarSocial,
    Footer,
    Header,
  },
};
</script>
