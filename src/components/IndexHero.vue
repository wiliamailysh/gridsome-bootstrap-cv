<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-lg-8 order-lg-last about__picture mt-4"
          data-aos="fade-left"
        >
          <g-image src="@images/general/review2.svg" alt="photo_de_profil" />
        </div>
        <div class="col-12 col-lg-4 about__heading" data-aos="fade-right">
          <h1>
            Développeur<br />
            web junior
          </h1>
          <h3>
            Profil autodidacte passionné par la technologie et l'image, en
            reconversion professionnelle dans le développement web après un
            bootcamp à The Hacking Project
          </h3>
          <a href="docs/CV_DOUAY.pdf" class="about__button" target="_blank"
            >Téléchargez CV</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  padding-top: 100px;
  background: var(--main-color);
  &__picture {
    margin: 0 auto;
    text-align: center;
    & img {
      max-width: 100%;
    }
  }
  &__heading {
    margin: auto;
    padding: 2rem;
    font-family: "Raleway", sans-serif;
    color: var(--second-color);
    & h1 {
      color: var(--text-color);
      font-family: "Palanquin", sans-serif;
      font-weight: 700;
    }
    & h3 {
      color: var(--text-color);
      padding: 3rem 0 4rem 0;
    }
  }
  &__button {
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid var(--third-color);
    padding: 18px 50px;
    color: var(--third-color);
    border-radius: 3px;
    margin-top: 20px;
    display: inline-block;
    transition: all 0.3s ease-in 0s;
    &:hover {
      background: var(--third-color);
      color: var(--main-color);
      text-decoration: none;
    }
  }
}
</style>
