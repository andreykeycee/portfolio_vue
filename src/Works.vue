<template lang="html">
  <div id="works">
      <h2>Works</h2>
      <div id="works-grid">
        <app-work
          imgHref="https://reforma-pensii.ru/"
          imgSrc="https://res.cloudinary.com/dblqrwxjg/image/upload/v1541583483/2018-11-07_1.png"
          siteName="Reforma Pensii"
         />
         <app-work
           imgHref="http://veloline.ru/"
           imgSrc="https://res.cloudinary.com/dblqrwxjg/image/upload/v1541583483/2018-11-07.png"
           siteName="Veloline"
          />
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "./scss/variables.scss";

#works {
  height: 100vh;
  background: $light;
}

#works-grid {
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 6rem 10vw 2rem 10vw;
  @include respond-to (handhelds) {
    grid-template-columns: none;
    margin: 6rem auto 2rem auto;
  }
  @include respond-to (medium-screens) {margin: 6rem auto 2rem auto;}
  @include respond-to (wide-screens) {grid-template-columns: 33% 33% 33%;}
}

</style>
