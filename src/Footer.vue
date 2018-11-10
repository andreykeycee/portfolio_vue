<template>
  <footer>
    <div id="icons-wrapper">
      <a href="https://www.facebook.com/andrew.bazhin.50"><img src="https://res.cloudinary.com/dblqrwxjg/image/upload/v1541757410/iconmonstr-facebook-4-48.png" alt=""></a>
      <a href="https://vk.com/andreykeycee"><img src="https://res.cloudinary.com/dblqrwxjg/image/upload/v1541757410/iconmonstr-github-1-48.png" alt=""></a>
      <a href="https://github.com/andreykeycee"><img src="https://res.cloudinary.com/dblqrwxjg/image/upload/v1541757410/iconmonstr-vk-4-48.png" alt=""></a>
    </div>
  </footer>
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

  footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 35vh;
    background: $dark;
  }

  #icons-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30vw;

    img {
      opacity: .7;
      transition: .5s;

      &:hover {
        opacity: 1;
        transition: .5s;
      }
    }
  }

</style>
