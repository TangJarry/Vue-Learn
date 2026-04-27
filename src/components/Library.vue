<script setup>
import { useLibraryStore } from "../assets/LibraryStore";
import { storeToRefs } from "pinia";
import { watch } from "vue";
const libraryStore = useLibraryStore();
const { books, bookCount } = storeToRefs(libraryStore);

watch(
  () => books.value.map((book) => book.num),
  (newNums, oldNums = []) => {
    newNums.forEach((num, index) => {
      if (num === 0 && oldNums[index] !== 0) {
        console.log(`${books.value[index].title} 已经卖完了`);
        alert(`${books.value[index].title} 已经卖完了`);
      }
    });
  },
);
</script>

<template>
  <div class="library">
    <h1>Library</h1>
    <p>Total Books: {{ bookCount }}</p>
    <ul>
      <li v-for="(book, index) in books" :key="book.id">
        {{ book.title }} by {{ book.author }},{{ book.year }} ,{{ book.num }}
        <button @click="() => libraryStore.buyABook(index, 1)">BuyOne</button>
        <button @click="() => libraryStore.addABook(index, 1)">AddOne</button>
      </li>
    </ul>
  </div>
</template>
