<template>
  <section class="shortener">
    <h1>Easily shortened URLs!</h1>
    <p>Just paste the URL, submit and it's done!</p>

    <form>
      <input type="url" placeholder="Your long URL" />
      <button>Shorten it!</button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
@use "../app.scss";

.shortener {
  @include app.flex();
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin: 15px;
  }

  p {
    font-size: 1.3rem;
    margin: 10px;
  }

  form {
    height: 45px;
    background: #0c0c0c;
    border-radius: 10px 10px 0 0;
    width: min(400px, 95%);
    @include app.flex(row);
    gap: 10px;

    input {
      width: 60%;
      padding: 5px;
      border-radius: 7px;
      border: 2px solid app.$form-orange;
      caret-color: #0c0c0c;
      color: #0c0c0c;

      &:focus {
        outline: 2px solid app.$form-orange;
        border: 1px solid #e8e8e8;
      }
    }

    button {
      width: 30%;
      border-radius: 7px;
      height: 30px;
      border: 0;
      background: app.$form-orange;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        background: app.$button-hover;
      }
    }
  }
}
</style>