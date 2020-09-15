<template>
  <!-- NAVBAR -->
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top"
    data-aos="fade-down"
  >
    <div class="nav-brand"><a href="#about">DOUAY VICTOR</a></div>
    <button
      type="button"
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#myNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#portfolio__anchor">portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills__anchor">compétences</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience__anchor">parcours</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss">
.navbar {
  background-color: white;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
  display: flex;
}

.navbar-nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.nav-brand {
  margin-left: 20px;
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
