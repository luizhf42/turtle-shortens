<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import "./app.scss";
import Header from "./components/Header.vue";
import { onBeforeMount } from "vue";

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      const localStorageLinks = JSON.parse(localStorage.getItem("links"));
      if (localStorageLinks.length === 0) localStorage.setItem("links", "[]");
    });
  },
  components: {
    Header,
  },
});
</script>
