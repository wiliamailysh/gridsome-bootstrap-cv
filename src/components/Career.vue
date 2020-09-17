<template>
  <section class="experience" id="experience__anchor">
    <div class="container" style="overflow: hidden">
      <div class="heading">
        <h2>mon parcours</h2>
      </div>
      <ul :class="[$breakpoint.smAndDown ? 'timeline__mobile' : 'timeline']">
        <li v-for="(e, i) in experiences" :key="`exp-${i}`">
          <div data-aos="zoom-in" class="timeline__badge">
            <font-awesome-icon :icon="['fas', `${e.icon}`]" />
          </div>
          <div :class="`timeline__container${i % 2 ? '' : '--inverted'}`">
            <div
              :data-aos="`${
                i % 2 && !isMobileList ? 'fade-right' : 'fade-left'
              }`"
              class="timeline__panel"
            >
              <div class="timeline__heading">
                <h3>
                  <g-image
                    :src="require(`!!assets-loader!@images/${e.logoPath}`)"
                    :style="e.mobileStyle"
                    :alt="e.description"
                  />
                </h3>
                <h4>{{ e.title }}</h4>
                <p class="text-muted">
                  <font-awesome-icon :icon="['far', 'clock']" />
                  {{ e.date }}
                </p>
              </div>
              <div class="timeline__body">
                <div v-for="(task, i) in e.tasks" :key="`task-${i}`">
                  <span class="texte-muted">{{ task }}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import experiences from "../mixins/experiences.js";
export default {
  data() {
    return {
      experiences,
    };
  },
};
</script>
<style lang="scss" scoped>
.experience {
  background: var(--main-color);
}
</style>
