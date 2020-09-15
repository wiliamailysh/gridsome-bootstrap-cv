<template>
  <footer>
    <div class="logos">
      <a
        href="https://www.linkedin.com/in/victor-douay-927639158/"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="https://github.com/wiliamailysh" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="mailto:victor.douay@gmail.com">
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  height: 80px;
  background: white;
  display: flex;
  align-items: center;
  & a {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.4rem;
    transition: all 0.1s;
    &:hover {
      color: var(--second-color);
      transform: scale(1.05);
    }
  }
}

.logos {
  width: 15%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
</style>
