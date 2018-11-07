<template>
  <div id="about">
    <h2>About us</h2>
    <div class="profiles-wrapper">
      <app-about-profile
        name="Andrew Bazhin"
        info="Juniour front-end developer from Moscow, Russia"
        v-bind:skills="['HTML5', 'CSS3', 'JS']"
       />
       <app-about-profile
         name="Ravil' Hasyanov"
         info="Juniour front-end developer and SEO specialist from Moscow, Russia"
         v-bind:skills="['SEO', 'Adobe PS', 'MODX']"
        />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "./scss/variables.scss";

  #about {
    height: 100vh;
    background: $light;

    .profiles-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 80vh;
      margin: auto 10vw;
      @include respond-to (handhelds) {margin: auto;}
      @include respond-to (medium-screens) {margin: auto;}
    }
  }
</style>
