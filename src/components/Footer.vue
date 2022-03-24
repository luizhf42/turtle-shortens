<template>
  <footer>
    <p>Made by <a href="https://github.com/luizhf42">Luiz Henrique</a> 🐢</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
@use "../app.scss";
footer {
  text-align: center;
  position: absolute;
  bottom: 5px;
  width: 100%;

  p {
    font-size: 1.1rem;
    text-shadow: 0 0 3px black;
    a {
      color: app.$orange;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>