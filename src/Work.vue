<template>
  <div class="work">
    <a v-bind:href="imgHref">
      <img v-bind:src="imgSrc" />
    </a>
    <h5>{{ siteName }}</h5>
  </div>
</template>

<script>
export default {
  props: ['imgHref', "imgSrc", "siteName"],
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "./scss/variables.scss";

.work {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 40rem;
    height: auto;
    box-shadow: $blueShadow;
    transition: .5s;

    &:hover {
      opacity: .8;
      transition: .5s;
    }
  }
}

</style>
