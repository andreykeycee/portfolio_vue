<template>
  <div id="top-header" class="lighter" v-on-scroll="handleScroll">
    <h1><a href="#">{{ logo }}</a></h1>
    <ul v-on-scroll="switchActive">
      <li v-for="nav in navs">
        <a v-bind:href="nav.href">{{ nav.topic }}</a>
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
          {topic: 'about', href: '#about'},
          {topic: 'works', href: '#works'},
          {topic: 'contact', href: '#contact'}
        ]
      }
    },
    methods: {
      handleScroll: (event, el) => {
        let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if (window.scrollY >= h - 50) {
          el.classList.add('darker')
          el.classList.remove('lighter')
          if (window.scrollY >= (h * 3) - 50) {
            el.classList.remove('darker')
            el.classList.add('lighter')
          }
        } else {
          el.classList.remove('darker')
          el.classList.add('lighter')
        }
      },
      switchActive: (event, el) => {
        let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        if (window.scrollY >= h && window.scrollY < h * 2) {
          el.children[0].classList.add('active-light')
          el.children[1].classList.remove('active-light')
          el.children[2].classList.remove('active-dark')
        } else if (window.scrollY >= h * 2 && window.scrollY < h * 3) {
          el.children[0].classList.remove('active-light')
          el.children[1].classList.add('active-light')
          el.children[2].classList.remove('active-dark')
        } else if (window.scrollY >= h * 3) {
          el.children[0].classList.remove('active-light')
          el.children[1].classList.remove('active-light')
          el.children[2].classList.add('active-dark')
        } else {
          el.children[0].classList.remove('active-light')
          el.children[1].classList.remove('active-light')
          el.children[2].classList.remove('active-dark')
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
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
      display: flex;
      text-transform: uppercase;
      font-family: $sansSerif;
      font-size: 2.2rem;
      margin-bottom: 1.5rem;

      li {
        margin: auto .5em;
        padding: .5em 0;
      }
    }
  }
  // change colors while scrolling
  .lighter {
    h1 {
      color: $light;
      transition: $changeColor;
      &:hover {
        color: $purple;
        background-color: $light;
      }
    }

    ul {
      color: $light;
      li {
        border-bottom: 2px solid $light;
        transition: $changeColor;
        &:hover {
          color: $blue;
          background-color: $light;
        }
      }
    }
  }
  .darker {
    h1 {
      color: $purple;
      transition: $changeColor;
      &:hover {
        color: $light;
        background-color: $purple;
      }
    }

    ul {
      color: $blue;
      li {
        border-bottom: 2px solid $blue;
        transition: $changeColor;
        &:hover {
          color: $light;
          background-color: $blue;
        }

      }
    }
  }
  // switching active buttons
  .active-light {
    color: $light;
    background-color: $blue;
  }

  .active-dark {
    color: $blue;
    background-color: $light;
  }
</style>
