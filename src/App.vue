<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import "./app.scss";
import Header from "./components/Header.vue";

export default defineComponent({
  setup() {},
  components: {
    Header,
  },
});
</script>
