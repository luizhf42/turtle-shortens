<template>
  <Shortener />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Shortener from "../components/Shortener.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  setup() {},
  components: {
    Shortener,
    Footer,
  },
});
</script>
