<template>
  <nav>
    <router-link to="/">home</router-link>
    |
    <router-link to="/links">links</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import "./app.scss";

import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  setup() {},
});
</script>
