<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Immer from "./components/Immer.vue";
import { storeToRefs } from "pinia";
import { useLibraryStore } from "./assets/LibraryStore";
import Library from "./components/Library.vue";
import Dynamic from "./components/Dynamic.vue";
import { ref, reactive } from "vue";
const objectOfAttrs = reactive({
  id: "container",
  class: "wrapper",
  style: "background-color:green",
});
const hahaha = ref("Hello, Vue!");
hahaha.value = "Hello, Vue 3!";
const count = ref(0);
function Add() {
  count.value++;
  console.log(count.value);
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
  <div :id="objectOfAttrs" :title="hahaha">{{ objectOfAttrs.id }}</div>
  <div>
    <button @click="Add">{{ count }}</button>
  </div>
  <div><Immer></Immer>  </div>
  <div>
    <p>-------------------------Library----------------------------</p>
    <Library></Library>
  </div>
  <div>
    <p>
      -------------------------Dynamic Component----------------------------
    </p>
    <Dynamic></Dynamic>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
