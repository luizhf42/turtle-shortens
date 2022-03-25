<template>
  <section class="shortener">
    <h1>Easily shortened URLs!</h1>
    <p>Just paste the URL, submit and it's done!</p>

    <form @submit.prevent="shorten">
      <input type="url" placeholder="Your long URL" v-model="url" />
      <button>Shorten it!</button>
    </form>
    <div class="response">
      <div v-if="shortenedLink && !hasRequestError">
        <div class="link">
          <a :href="shortenedLink" target="_blank" rel="noopener noreferrer">{{
            shortenedLink
          }}</a>
          🐢
        </div>
        <img
          :src="clipboard"
          alt=""
          aria-label="Copy to clipboard"
          @click="copyLink($event)"
          v-tooltip="tooltip"
        />
      </div>
      <p v-if="!shortenedLink && !hasRequestError">
        Your short link goes here!
      </p>

      <p v-if="hasRequestError" class="error">An error occurred!</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "../services/axios";
import clipboard from "../assets/clipboard.svg";
import clipboardCheck from "../assets/clipboard-check.svg";
import { setShortenedLinks } from "../services/localStorage";

export let links;

export default defineComponent({
  setup() {
    const tooltip = ref("Copy to clipboard!");
    const url = ref("");
    const shortenedLink = ref("");
    const hasRequestError = ref(false);

    const shorten = async () => {
      try {
        const { data } = await axios.post("/shorten", {
          long_url: url.value.trim(),
        });

        setShortenedLinks({
          shortURL: data.link,
          longURL: data.long_url,
        });

        links = JSON.parse(localStorage.getItem("links"));

        shortenedLink.value = data.link;
        hasRequestError.value = false;
      } catch (error) {
        console.error(error);
        hasRequestError.value = true;
      }
    };

    const copyLink = (event) => {
      navigator.clipboard.writeText(shortenedLink.value);
      tooltip.value = "Copied!";
      event.target.src = clipboardCheck;

      setTimeout(() => {
        event.target.src = clipboard;
        tooltip.value = "Copy to clipboard!";
      }, 5000);
    };

    onMounted(() => (links = JSON.parse(localStorage.getItem("links"))));

    return {
      shorten,
      copyLink,
      url,
      shortenedLink,
      hasRequestError,
      clipboard,
      clipboardCheck,
      tooltip,
    };
  },
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

  > p {
    font-size: 1.3rem;
    margin: 10px 10px 20px;
  }

  form {
    height: 60px;
    box-shadow: 0 0 5px black;
    background: #0c0c0c;
    border-radius: 10px 10px 0 0;
    width: min(500px, 95%);
    @include app.flex(row);
    gap: 10px;

    input {
      font-size: 1.1rem;
      width: 65%;
      height: 40px;
      padding: 8px;
      border-radius: 7px;
      border: app.$input-border;
      caret-color: #0c0c0c;
      color: #0c0c0c;

      &:focus {
        outline: 0;
        border: 2px solid app.$orange;
      }
    }

    button {
      font-size: 1.1rem;

      width: 30%;
      border-radius: 7px;
      height: 40px;
      border: 0;
      background: app.$orange;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        background: app.$button-hover;
      }
    }
  }

  .response {
    @extend form;
    justify-content: space-between;
    border-radius: 0 0 10px 10px;

    > div {
      @include app.flex(row, space-between);
      margin: auto;
      width: 95%;
      height: 100%;

      .link {
        text-align: left;
        width: 80%;
        a {
          color: app.$orange;
          margin-right: 5px;
          font-size: 1.3rem;
        }
      }

      img {
        cursor: pointer;
        height: 50%;
        z-index: 2;
      }
    }

    p {
      text-align: center;
      width: 100%;
      font-size: 1.4rem;
    }

    .error {
      color: app.$red;
    }
  }
}
</style>

