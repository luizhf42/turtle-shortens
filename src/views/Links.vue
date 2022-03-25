<template>
  <section class="links">
    <h3>All the links that The Turtle shortened for you will appear here.</h3>

    <p>
      <span class="copy-instruction">Click to copy the short link</span>,
      <span class="delete-instruction">double click to delete it</span>.
    </p>

    <ul>
      <li
        v-for="link in links"
        :key="link.shortURL"
        @click="copyText(link.shortURL, $event)"
        @dblclick="deleteLink(link, $event)"
      >
        <span>{{ link.longURL }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { links } from "../components/Shortener.vue";

export default defineComponent({
  setup() {
    const showAdvice = ref(false);
    const copyText = (shortURL: string, event) => {
      navigator.clipboard.writeText(shortURL);
      event.target.parentNode.style.border = "1px solid #00c500";
      setTimeout(() => {
        event.target.parentNode.style.border = "0";
      }, 500);
    };

    const deleteLink = (link: Object, event) => {
      event.target.parentNode.classList.add("deleted");
      setTimeout(() => {
        event.target.parentNode.remove();
      }, 500);
      const links = JSON.parse(localStorage.getItem("links"));
      links.splice(links.indexOf(link), 1);
      localStorage.setItem("links", JSON.stringify(links));
    };
    return {
      copyText,
      deleteLink,
      links,
      showAdvice,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "../app.scss";
.links {
  height: calc(100vh - 180px);
  text-align: center;

  h3 {
    font-size: 1.3rem;
    width: 90%;
    margin: 10px auto;
    font-weight: bold;
  }

  p {
    font-size: 1.1rem;
    width: 90%;
    margin: 10px auto;

    .copy-instruction {
      color: app.$green;
    }
    .delete-instruction {
      color: app.$red;
    }
  }

  ul {
    padding-right: 5px;
    margin: 0 auto 10px;
    height: calc(100vh - 260px);
    overflow: auto;
    width: min(550px, 95%);
    @include app.flex(column, start);
    gap: 10px;

    li {
      width: 100%;
      min-height: 30px;
      background: #000000b3;
      border-radius: 4px;
      border: 1px solid #000000;
      transition: 0.2s;

      &.deleted {
        animation: delete 0.5s;
      }

      span {
        padding: 0 6px;
        font-size: 1.05rem;
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: default;
        @include app.flex(column, center, start);
        width: 100%;
        text-align: left;
        height: 100%;
      }
    }
  }
}

footer {
  display: none !important;
}

@keyframes delete {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>