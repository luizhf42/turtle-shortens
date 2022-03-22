<template>
  <header>
    <div class="logo">
      <img :src="turtle" alt="" />
      <p>The Turtle shortens!</p>
    </div>

    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>

        <li>
          <router-link to="/links">Links</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import turtle from "../assets/turtle.png";

export default defineComponent({
  setup() {
    return {
      turtle,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "../app.scss";
header {
  margin: 0 auto 40px;
  height: auto;
  width: 92%;
  @include app.flex(row, space-between);

  .logo {
    height: 100px;
    width: min(330px, 95%);
    @include app.flex(row, space-around);

    img {
      height: 85%;
    }

    p {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  nav {
    ul {
      @include app.flex(row, space-around);
      width: 200px;
      li {
        a {
          font-size: 1.4rem;
          text-decoration: none;
          &:hover {
            border-bottom: 1px solid #ffffff;
          }
          &.router-link-active,
          &.router-link-exact-active {
            font-weight: bold;
            border-bottom: 1px dashed #ffffff;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  header {
    width: 100%;
    @include app.flex();
  }
}
</style>