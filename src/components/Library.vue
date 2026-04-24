<script setup>
import { useLibraryStore } from '../assets/LibraryStore';
import { storeToRefs } from 'pinia'
import { ref} from "vue";
const libraryStore = useLibraryStore()
const {books,bookCount} =storeToRefs(libraryStore)


</script>


<template>
  <div class="library">
    <h1>Library</h1>
    <p>Total Books: {{ bookCount }}</p>
    <ul>
      <li v-for="(book,index) in books" :key="book.id">
        {{ book.title }} by {{ book.author }},{{ book.year }} ,{{ book.num }}
        <button @click="() => libraryStore.buyABook(index, 1)">BuyOne</button>
        <button @click="() => libraryStore.addABook(index, 1)">AddOne</button>
      </li>
    </ul>
  </div>
</template>