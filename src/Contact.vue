<template>
  <div id="contact">
    <h2>contact us</h2>
    <form class="contact-form" action="" method="">
      <label for="name">your name:</label>
      <input type="text" id="name" name="name" value="">
      <label for="email">your email:</label>
      <input type="text" id="email" name="email" value="">
      <label for="feedback">your thoughts:</label>
      <textarea id="feedback" name="feedback" rows="8" cols="80"></textarea>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "./scss/variables.scss";

#contact {
  background: $mainGradient;
  height: 60vh;

  h2 {
    color: $light;
    -webkit-text-fill-color: inherit;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    font-family: $sansSerif;
    margin: auto 20%;
    margin-top: 5vh;
    @include respond-to (handhelds) {margin: 5vh 5vw auto 5vw;}
    @include respond-to (wide-screens) {margin: 5vh 30vw auto 30vw;}

    label {
      font-size: 2rem;
      color: $light;
      margin-top: .5em;
    }

    input {
      background: $light;
      text-indent: .5em;
      font-size: 2rem;
      border: none;
      border-radius: 10px;
      height: 1.4em;
      opacity: .5;
      transition: .5s;
      font-family: $sansSerif;

      &:focus {
        opacity: .8;
        transition: .5s;
        outline: none;
      }
    }

    textarea {
      font-size: 2rem;
      border: none;
      border-radius: 10px;
      opacity: .5;
      transition: .5s;
      text-indent: .5em;
      font-family: $sansSerif;

      &:focus {
        opacity: .8;
        transition: .5s;
        outline: none;
      }
    }
  }
}

</style>
