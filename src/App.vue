<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import "./app.scss";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  setup() {
    localStorage.setItem("links", "");
  },
  components: {
    Header,
    Footer,
  },
});
</script>
