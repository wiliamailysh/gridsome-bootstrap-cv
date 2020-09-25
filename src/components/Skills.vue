<template>
  <section class="skills" id="skills__anchor">
    <div class="heading">
      <h2>mes compétences</h2>
    </div>
    <div class="skills__other" style="overflow-x: hidden">
      <div class="container">
        <div class="row">
          <div
            v-for="(attr, i) in attributes"
            :key="`attr-${i}`"
            class="col-12 col-lg-4"
            data-aos="zoom-out-down"
          >
            <div class="other">
              <div class="other__image">
                <font-awesome-icon :icon="['fas', `${attr.icon}`]" />
              </div>
              <div class="other__title" v-html="attr.title" />
              <div class="other__text">
                {{ attr.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="skills__techs">
      <div class="container" style="overflow-x: hidden">
        <div class="row">
          <div
            v-for="(s, i) in skills"
            :key="`skill-${i}`"
            class="skills__picture__container col-4 col-md-2"
          >
            <g-image
              class="skills__picture"
              :src="require(`!!assets-loader!@images/${s.logoPath}`)"
              :alt="s.description"
              :data-aos="s.animation"
              :data-aos-delay="s.delayAnimation"
              data-aos-anchor-placement="top-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import attributes from "../mixins/attributes.js";
import skills from "../mixins/skills.js";
export default {
  data() {
    return {
      attributes,
      skills,
    };
  },
};
</script>
<style lang="scss">
.skills {
  background: var(--main-color);
  &__other {
    background: var(--main-color);
    padding: 50px 0 100px 0;
  }
  &__techs {
    background: white;
    padding: 5rem;
  }
  &__picture {
    // Use bootstrap breakpoints mixins
    @media screen and (max-width: 640px) {
      max-height: 7vh;
    }
    @media screen and (min-width: 641px) and (max-width: 991px) {
      max-height: 9vh;
    }
    @media screen and (min-width: 992px) {
      max-height: 18vh;
    }
    width: auto;
    margin-top: 2rem;
  }
}

.skills__picture__container {
  display: flex;
  justify-content: center;
}

.other {
  margin: 10px;
  padding: 10px;
  background: white;
  border-radius: 7px;
  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.175);
  padding: 2rem;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &__image {
    font-size: 3rem;
    text-align: center;
    color: var(--test-color);
  }
  &__title {
    font-family: "Palanquin", sans-serif;
    text-transform: uppercase;
    text-align: center;
    color: var(--text-color);
  }
  &__text {
    text-align: center;
    color: var(--text-color);
  }
}
</style>
