<template>
  <section class="portfolio" id="portfolio__anchor">
    <div class="heading">
      <h2>mes projets</h2>
    </div>
    <div class="container">
      <div class="row">
        <div v-for="(p, i) in projects" :key="`project-${i}`" class="col-12">
          <a :href="p.link" target="_blank">
            <div class="project" data-aos="flip-down">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-md-3">
                    <div class="project__image">
                      <g-image
                        class="skills__picture"
                        :src="require(`!!assets-loader!@images/${p.imagePath}`)"
                        :alt="p.title"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-9">
                    <div class="project__description">
                      <h3>{{ p.title }}</h3>
                      <div class="project__time">
                        <p>
                          <font-awesome-icon :icon="['far', 'clock']" />
                          {{ p.time }}
                        </p>
                        <div
                          v-for="(text, i) in p.specifications"
                          :key="`specification-${i}`"
                        >
                          {{ text }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from "../mixins/projects.js";
export default {
  data() {
    return {
      projects,
    };
  },
};
</script>
<style lang="scss" scoped>
.project {
  background: var(--main-color);
  border-radius: 7px;
  margin-top: 2rem;
  &:hover {
    box-shadow: 0 1px 25px rgba(0, 0, 0, 0.175);
    background: var(--main-color);
    transform: scale(1.02) !important;
  }
  &__image img {
    width: 100%;
    padding: 1rem;
  }
  &__description {
    padding: 2rem;
  }
}
</style>
