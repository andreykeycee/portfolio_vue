<template>
  <div class="about-profile">
    <h3 class="about-name">{{ name }}</h3>
    <p class="about-info">{{ info }}</p>
    <ul class="skills">
      <li v-for="skill in skills">{{ skill }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['name', 'info', 'skills'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "./scss/variables.scss";

  .about-profile {
    font-family: $sansSerif;
    font-size: 2rem;
    width: 35%;
    height: 50vh;
    margin: auto;
    padding: 2em;
    border: 3px solid $mixed;
    border-radius: 25px;

    h3 {
      color: $purple;
      text-align: center;
      font-size: 2em;
    }
    p {
      color: $darkBlue;
    }
    ul {
      color: $darkBlue;
    }
  }

</style>
