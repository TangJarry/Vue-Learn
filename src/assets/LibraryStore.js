import { defineStore } from "pinia";
import { computed } from "vue";
import { ref } from "vue";

export const useLibraryStore = defineStore("library", () => {
  const books = ref([
    { id: "1", title: "vue3", author: "yangpeng", year: 2024, num: 5 },
    { id: "2", title: "Vite", author: "yangpeng", year: 2024, num: 2 },
    { id: "3", title: "Pinia", author: "yangpeng", year: 2024, num: 3 },
  ]);
  const customers = ref(0);
  const bookCount = computed(() => {
    let sum = 0;
    for (let i = 0; i < books.value.length; i++) {
      sum += books.value[i].num;
    }
    return sum;
  });
  function buyABook(index, num) {
    if (books.value[index].num > 0) {
      books.value[index].num -= num;
      customers.value++;
    }
  }
  function addABook(index, num) {
    books.value[index].num+= num;
  }
  return { books, customers, buyABook, addABook, bookCount };
});
