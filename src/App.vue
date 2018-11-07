<template>
  <div id="app">
    <app-top-header />
    <app-header />
    <app-about />
    <app-works />
    <app-contact />
    <app-footer />
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

  html {
    font-size: 10px;
    height: 100%;
  }
  body {
    min-height: 100%;
    margin: 0;
  }
  div, h1, h2, h5, ul, ol {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    font-family: $sansSerif;
    text-align: center;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 4rem;
    letter-spacing: .5em;
    padding-top: 4vh;
    background: $mainGradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
   h5 {
     font-family: $sansSerif;
     text-align: center;
     font-weight: 400;
     font-size: 3rem;
     background: $mainGradient;
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     margin: 1rem;
   }

</style>
