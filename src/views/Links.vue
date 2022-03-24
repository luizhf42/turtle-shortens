<template>
  <section class="links">
    <p>All your previously shortened links goes here. Just click it to copy!</p>

    <ul>
      <li
        v-for="link in links"
        :key="link.shortURL"
        @click="copyText(link.shortURL)"
        @dblclick="deleteLink(link, $event)"
      >
        <span>{{ link.longURL }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { links } from "../components/Shortener.vue";

export default defineComponent({
  setup() {
    const copyText = (shortURL: string) =>
      navigator.clipboard.writeText(shortURL);
      
    const deleteLink = (link: Object, event) => {
      event.target.parentNode.remove();
      const links = JSON.parse(localStorage.getItem("links"));
      links.splice(links.indexOf(link), 1);
      localStorage.setItem("links", JSON.stringify(links));
    };
    return {
      copyText,
      deleteLink,
      links,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "../app.scss";
.links {
  height: calc(100vh - 180px);
  text-align: center;

  p {
    font-size: 1.2rem;
    width: 90%;
    margin: 10px auto;
    font-weight: bold;
  }

  ul {
    margin: auto;
    width: min(550px, 95%);
    @include app.flex(column, start);
    gap: 10px;

    li {
      @include app.flex(column, center, start);
      padding: 0 6px;
      width: 100%;
      height: 30px;
      background: #000;

      span {
        cursor: default;
        width: 100%;
        text-align: left;
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 20px;
      }
    }
  }
}
</style>