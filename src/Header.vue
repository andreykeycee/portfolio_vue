<template>
  <header>
    <p id="greet">Hi, we are web developers</p>
  </header>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./scss/variables.scss";

  header {
    height: 100vh;
    background: $mainGradient;

    #greet {
      font-family: $sansSerif;
      font-size: 6rem;
      text-align: center;
      color: $light;
      padding-top: 40vh;
      margin: 0;
    }
  }


</style>
