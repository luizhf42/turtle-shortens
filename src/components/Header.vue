<template>
  <header>
    <div class="logo">
      <img :src="turtleImg" alt="" />
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
    const turtleImg = turtle;

    return {
      turtleImg,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "../app.scss";
header {
  margin: auto;
  height: auto;
  width: 95%;
  @include app.flex(row, space-between);

  .logo {
    height: 150px;
    width: 318px;
    @include app.flex(row, space-around);

    img {
      height: 85%;
    }

    p {
      font-size: 1.2rem;
    }
  }

  nav {
    ul {
      @include app.flex(row, space-around);
      width: 200px;
      li {
        a {
          font-size: 1.25rem;
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

@media screen and (max-width: 550px) {
  header {
    @include app.flex();
  }
}
</style>