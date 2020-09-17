<template>
  <b-navbar toggleable="lg" fixed="top">
    <b-navbar-brand href="#">DOUAY VICTOR</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#portfolio__anchor">portfolio</b-nav-item>
        <b-nav-item href="#skills__anchor">compétences</b-nav-item>
        <b-nav-item href="#experience__anchor">parcours</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style lang="scss">
.navbar {
  background-color: white;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 5px;
}

.navbar-nav {
  width: 100%;
  justify-content: flex-end;
}

.navbar-brand {
  margin-left: 20px;
  font-size: 12px !important;
}

.navbar-toggler {
  border-style: none;
}

.navbar .navbar-collapse {
  text-align: center;
}

.nav-item {
  padding: 5px 0;
  margin: 0 10px;
}

.nav-link {
  padding: 8px 22px !important;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background: var(--third-color);
  color: white !important;
}

.nav-link:active {
  background: var(--third-color);
  color: white !important;
}
</style>
