<template>
  <div id="top-header" class="lighter" v-on-scroll="handleScroll">
    <h1>{{ logo }}</h1>
    <ul>
      <li v-for="nav in navs">
        {{ nav.topic }}
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        scrolled: false,
        logo: ':Portfolio',
        navs: [
          {topic: 'about'},
          {topic: 'works'},
          {topic: 'contact'}
        ]
      }
    },
    methods: {
      handleScroll: (event, el) => {
        if (window.scrollY >= Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) {
          el.classList.add('darker')
          el.classList.remove('lighter')
        } else {
          el.classList.remove('darker')
          el.classList.add('lighter')
        }
      }
    }
  }

</script>

<style lang='scss'>
  @import "./scss/variables.scss";

  #top-header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    top: 0;
    width: 100%;

    h1 {
      font-family: $logoFont;
      font-size: 6rem;
      // color: $light;
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
      display: flex;
      text-transform: uppercase;
      font-family: $sansSerif;
      font-size: 2.2rem;
      // color: $light;
      margin: 0;

      li {
        margin: auto .5em;
        padding: .5em 0;
      }
    }
  }
  .lighter {
    h1 {
      color: $light;
      transition: .5s
    }
    ul {
      color: $light;
      transition: .5s
      li {
        border-bottom: 2px solid $light;
        transition: .5s
      }
    }
  }
  .darker {
    h1 {
      color: $purple;
      transition: .5s
    }
    ul {
      color: $blue;
      transition: .5s
      li {
        border-bottom: 2px solid $blue;
        transition: .5s
      }
    }
  }
</style>
