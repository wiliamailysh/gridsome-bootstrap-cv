<template>
  <Layout>
    <IndexHero />
    <Project />
    <Skills />
    <Career />
  </Layout>
</template>

<script>
import IndexHero from "~/components/IndexHero";
import Project from "~/components/Project";
import Skills from "~/components/Skills";
import Career from "~/components/Career";
// import AOS from "aos";

export default {
  components: {
    IndexHero,
    Project,
    Skills,
    Career,
  },
  // created() {
  //   AOS.init();
  // },
};
</script>
